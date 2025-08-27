
    export type RemoteKeys = 'maths';
    type PackageType<T> = T extends 'maths' ? typeof import('maths') :any;