import { Anchor, Surface, Text } from "@itwin/itwinui-react";
import React from "react";
import styles from "./ListCard.module.scss";

export type ListCardProps = {
  title: string;
  children: React.ReactNode;
  footer?: string;
};

const ListCard = (props: ListCardProps) => {
  return (
    <Surface elevation={1} className={styles["synchro-list-card"]}>
      <div className={styles["card-title"]}>
        <Text variant="subheading">{props.title}</Text>
      </div>
      <div className={styles["card-items"]}>{props.children}</div>
      {props.footer && (
        <div className={styles["card-footer"]}>
          <Anchor>{props.footer}</Anchor>
        </div>
      )}
    </Surface>
  );
};

export default ListCard;
