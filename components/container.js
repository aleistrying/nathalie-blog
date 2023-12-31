import { cx } from "@/utils/all";

export default function Container(props) {
  return (
    <div
      className={cx(
        "container relative mx-auto px-8 xl:px-5",
        props.large ? " max-w-screen-xl" : " max-w-screen-lg",
        !props.alt && "py-5 lg:py-8",
        props.className
      )}>
      {props.children}
    </div>
  );
}
