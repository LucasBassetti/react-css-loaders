declare module 'react-css-loaders' {
  import {FC} from "react";

  export interface IReactCssLoaderProps {
    color?: string,
    duration?: number,
    size?: number
  }

  export interface IReactCssLoaderWithBackgroundProps extends IReactCssLoaderProps {
    background?: string
  }

  export const BarLoader: FC<IReactCssLoaderProps>;
  export const BubbleLoader: FC<IReactCssLoaderProps>;
  export const BubbleSpinLoader: FC<IReactCssLoaderProps>;
  export const CometSpinLoader: FC<IReactCssLoaderProps>;
  export const CylinderSpinLoader: FC<IReactCssLoaderProps>;
  export const RotateSpinLoader: FC<IReactCssLoaderProps>;
  export const ResizeSpinLoader: FC<IReactCssLoaderWithBackgroundProps>;
  export const SpinLoader: FC<IReactCssLoaderWithBackgroundProps>;
}
