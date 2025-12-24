declare module 'react-draggable' {
  import { Component, CSSProperties, ReactNode } from 'react';

  export interface DraggableProps {
    axis?: 'both' | 'x' | 'y' | 'none';
    bounds?: string | { left?: number; top?: number; right?: number; bottom?: number };
    cancel?: string;
    defaultClassName?: string;
    defaultClassNameDragging?: string;
    defaultClassNameDragged?: string;
    defaultPosition?: { x: number; y: number };
    disabled?: boolean;
    grid?: [number, number];
    handle?: string;
    nodeRef?: React.RefObject<HTMLElement>;
    onStart?: (e: MouseEvent | TouchEvent, data: DraggableData) => void | false;
    onDrag?: (e: MouseEvent | TouchEvent, data: DraggableData) => void | false;
    onStop?: (e: MouseEvent | TouchEvent, data: DraggableData) => void | false;
    position?: { x: number; y: number };
    scale?: number;
    children?: ReactNode;
  }

  export interface DraggableData {
    node: HTMLElement;
    x: number;
    y: number;
    deltaX: number;
    deltaY: number;
    lastX: number;
    lastY: number;
  }

  export default class Draggable extends Component<DraggableProps> {}
}

