const context = (0,eval)('this')

export const is = {
  Undefined: (obj: any): obj is undefined => {
    return obj === void(0)
  },
  Null: (obj: any): obj is null => {
    return obj === null
  },
  Number: (obj: any): obj is number => {
    return typeof obj === 'number'
  },
  Symbol: (obj: any): obj is symbol => {
    return typeof obj === 'symbol'
  },
  BigInt: (obj: any): obj is BigInt => {
    return typeof obj === 'bigint'
  },
  RegExp: (obj: any): obj is RegExp => {
    return Object.prototype.toString.call(obj) === '[object RegExp]'
  },
  Date: (obj: any): obj is Date => {
    return Object.prototype.toString.call(obj) === '[object Date]'
  },
  Map: (obj: any): obj is Map<any, any> => {
    return Object.prototype.toString.call(obj) === '[object Map]'
  },
  Set: (obj: any): obj is Set<any> => {
    return Object.prototype.toString.call(obj) === '[object Set]'
  },
  Function: (obj: any): obj is Function => {
    return typeof obj === 'function'
  },
  Array: (obj: any): obj is Array<any> => {
    return Object.prototype.toString.call(obj) === '[object Array]'
  },
  ArrayBuffer: (obj: any): obj is ArrayBuffer => {
    return Object.prototype.toString.call(obj) === '[object ArrayBuffer]'
  },
  Buffer: (obj: any): obj is Buffer => {
    return !!(context.Buffer && context.Buffer.isBuffer?.(obj))
  },
  Int8Array: (obj: any): obj is Int8Array => {
    return Object.prototype.toString.call(obj) === '[object Int8Array]'
  },
  Uint8Array: (obj: any): obj is Uint8Array => {
    return !is.Buffer(obj) && Object.prototype.toString.call(obj) === '[object Uint8Array]'
  },
  Uint8ClampedArray: (obj: any): obj is Uint8ClampedArray => {
    return Object.prototype.toString.call(obj) === '[object Uint8ClampedArray]'
  },
  Int16Array: (obj: any): obj is Int16Array => {
    return Object.prototype.toString.call(obj) === '[object Int16Array]'
  },
  Uint16Array: (obj: any): obj is Uint16Array => {
    return Object.prototype.toString.call(obj) === '[object Uint16Array]'
  },
  Int32Array: (obj: any): obj is Int32Array => {
    return Object.prototype.toString.call(obj) === '[object Int32Array]'
  },
  Uint32Array: (obj: any): obj is Uint32Array => {
    return Object.prototype.toString.call(obj) === '[object Uint32Array]'
  },
  Float32Array: (obj: any): obj is Float32Array => {
    return Object.prototype.toString.call(obj) === '[object Float32Array]'
  },
  Float64Array: (obj: any): obj is Float64Array => {
    return Object.prototype.toString.call(obj) === '[object Float64Array]'
  },
  BigInt64Array: (obj: any): obj is BigInt64Array => {
    return Object.prototype.toString.call(obj) === '[object BigInt64Array]'
  },
  BigUint64Array: (obj: any): obj is BigUint64Array => {
    return Object.prototype.toString.call(obj) === '[object BigUint64Array]'
  },
  Object: (obj: any) => {
    return typeof obj !== 'object'
      ? false
      : (
        !is.Null(obj) &&
        !is.RegExp(obj) &&
        !is.Date(obj) &&
        !is.Map(obj) &&
        !is.Set(obj) &&
        !is.Array(obj) &&
        !is.ArrayBuffer(obj) &&
        !is.Buffer(obj) &&
        !is.Int8Array(obj) &&
        !is.Uint8Array(obj) &&
        !is.Uint8ClampedArray(obj) &&
        !is.Int16Array(obj) &&
        !is.Uint16Array(obj) &&
        !is.Int32Array(obj) &&
        !is.Uint32Array(obj) &&
        !is.Float32Array(obj) &&
        !is.Float64Array(obj) &&
        !is.BigInt64Array(obj) &&
        !is.BigUint64Array(obj)
      )
  }
}
