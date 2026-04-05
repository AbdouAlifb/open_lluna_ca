"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import type React from "react";

type Props = {
  label?: string;
  className?: string;
  style?: React.CSSProperties;
};

export default function BookMeetingButton({
  label = "Book a Meeting",
  className = "",
  style,
}: Props) {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <button
      data-cal-namespace="30min"
      data-cal-link="ali-abdou-openlluna/30min"
      data-cal-config='{"layout":"month_view"}'
      className={className}
      style={style}
    >
      {label}
    </button>
  );
}
