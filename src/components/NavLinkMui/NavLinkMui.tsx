import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";
import { forwardRef } from "react";

const LinkBehavior = forwardRef<any, Omit<RouterLinkProps, "to">>(
  (props, ref) => (
    <RouterLink
      ref={ref}
      to="/material-ui/getting-started/installation/"
      {...props}
    />
  ),
);

export default LinkBehavior;
