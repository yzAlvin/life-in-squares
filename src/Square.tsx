import { OverlayTrigger, Tooltip } from "solid-bootstrap";
import type { Component } from "solid-js";

const Square: Component = ({fill="red", x=10, y=10, width=100, height=100, strokeWidth=3}) => {
 return (
    <OverlayTrigger
  placement="right"
  delay={{ show: 250, hide: 1000 }}
  overlay={<Tooltip id="button-tooltip">Simple tooltip</Tooltip>}
>
    <rect x={x} y={y} width={width} height={height} stroke="black" stroke-width={strokeWidth} fill={fill} data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Disabled popover" />
    </OverlayTrigger>
 )
}

export default Square;
        