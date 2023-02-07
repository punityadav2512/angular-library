import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheResolveService {


  constructor() { }

  private cache = new Map<string, [Date, HttpResponse<any>]>()

  set(key, value, timeToLive: number | null = null){
    console.log('Set Cache Key', key);

    if(timeToLive){
      const expires = new Date();
      expires.setSeconds(expires.getSeconds() + timeToLive);
      this.cache.set(key, [expires, value]);
    }else{
      this.cache.set(key, [null, value]);
    }
  }

  get(key): HttpResponse<any> | null{
    console.log('Get Cache Key', key);
    const value = this.cache.get(key);
    if(!value){
      return null;
    }

    const [expires, response] = value;
    if(expires && expires < new Date()){
      this.cache.delete(key);
      return null;
    }

    return response;
  }

}
