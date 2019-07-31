
export class Config<T> {
    constructor(
        public classType?: Type<T>
    ) {
    }
}

export class SubClass {
    test: string
}
export class SubConfig extends Config<SubClass>{

}
interface Type<T> {
    new(...args: any[]): T;
}
function f1<D, T extends Config<D>>(val: T) {
    return val
}
function f2<D, T extends Config<D>>(val: T) {
    return val.classType
}
/**
 * when `f1` return val,and classType=>SubClass
 * but `f2` return  val.config.classType and classType=>unknown
 * I want to use `f2` and also return `SubClass`
 * How to Change Code?
 * Or like a bug?
 */
let a = f1(new SubConfig())
let classA = new a.classType()
console.log(classA.test)
let b = f2(new SubConfig())
let classB=new b()
console.log(classB.test)