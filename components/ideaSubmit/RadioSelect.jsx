"use client";

import { useState } from "react";
import styles from "./RadioSelect.module.css";

export default function RadioSelect({
  label,
  options,
  value,
  onChange,
  hasOther = false,
  otherValue = "",
  onOtherChange,
}) {
  const [otherFocused, setOtherFocused] = useState(false);

  return (
    <div className={styles.wrapper}>
      {label && <span className={styles.label}>{label}</span>}

      <div className={styles.options}>
        {options.map((opt) => {
          const isSelected = value === opt;
          return (
            <button
              key={opt}
              type="button"
              className={`${styles.option} ${isSelected ? styles.selected : ""}`}
              onClick={() => onChange(opt)}
            >
              <span className={styles.indicator}>
                <span className={styles.dot} />
              </span>
              <span className={styles.text}>{opt}</span>
            </button>
          );
        })}

        {hasOther && (
          <button
            type="button"
            className={`${styles.option} ${value === "Other" ? styles.selected : ""}`}
            onClick={() => onChange("Other")}
          >
            <span className={styles.indicator}>
              <span className={styles.dot} />
            </span>
            <span className={styles.text}>Other</span>
          </button>
        )}
      </div>

      {hasOther && value === "Other" && (
        <div
          className={`${styles.otherInputWrap} ${otherFocused ? styles.otherFocused : ""}`}
        >
          <input
            type="text"
            className={styles.otherInput}
            placeholder="Specify your theme…"
            value={otherValue}
            onChange={(e) => onOtherChange?.(e.target.value)}
            onFocus={() => setOtherFocused(true)}
            onBlur={() => setOtherFocused(false)}
          />
        </div>
      )}
    </div>
  );
}
