"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import styles from "./Idea.module.css";

const emptyMember = () => ({ name: "", phone: "", studentClass: "" });

const isValidPhone = (num) => /^[6-9]\d{9}$/.test(num);
const sanitizePhone = (val) => val.replace(/\D/g, "").slice(0, 10);

const TAGLINES = [
  "Got a world-changing idea?",
  "Your next big thing starts here.",
  "Think it. Pitch it. Build it.",
  "Ideas don't wait. Neither should you.",
  "Be the founder of something great.",
];

const LAST_DATE = new Date("2026-02-20T23:59:59");

const isClosed = () => new Date() > LAST_DATE;

const submitIdea = async (data) => {
  if (isClosed()) {
    throw new Error("Idea submission is closed.");
  }
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_IDEA_PITCH_API + "/submit-idea",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error submitting idea:", error);
    throw error;
  }
};

export default function IdeaSubmit() {
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState("");
  const [submitStatus, setSubmitStatus] = useState("idle"); // idle | submitting | success | error
  const [submitMessage, setSubmitMessage] = useState("");

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [teamName, setTeamName] = useState("");
  const [ideaTitle, setIdeaTitle] = useState("");
  const [brief, setBrief] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [teammates, setTeammates] = useState([]);

  /* ── tagline rotation ── */
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [taglineFade, setTaglineFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineFade(false);
      setTimeout(() => {
        setTaglineIndex((prev) => (prev + 1) % TAGLINES.length);
        setTaglineFade(true);
      }, 400);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const url = window.location.href;
    const queries = new URLSearchParams(url.split("?")[1]);
    const $i = queries.get("i");
    if ($i && $i === "o") {
      // scroll to ideaSubmit
      document
        .getElementById("ideaSubmit")
        .scrollIntoView({ behavior: "smooth" });
      open();
    }
  }, []);

  /* ── helpers ── */
  const open = () => {
    setIsOpen(true);
    window.dispatchEvent(
      new CustomEvent("ideaModalToggle", { detail: { open: true } }),
    );
  };
  const close = () => {
    setIsOpen(false);
    setError("");
    setSubmitStatus("idle");
    setSubmitMessage("");
    window.dispatchEvent(
      new CustomEvent("ideaModalToggle", { detail: { open: false } }),
    );
  };

  const resetForm = () => {
    setFirstName("");
    setEmail("");
    setPhone("");
    setPhoneError("");
    setStudentClass("");
    setVideoUrl("");
    setTeamName("");
    setIdeaTitle("");
    setBrief("");
    setTeammates([]);
    setError("");
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) close();
  };

  /* ── teammate management ── */
  const updateTeammate = useCallback((index, field, value) => {
    setTeammates((prev) => {
      const copy = [...prev];
      copy[index] = { ...copy[index], [field]: value };
      return copy;
    });
  }, []);

  const addTeammate = () => {
    if (teammates.length < 2) {
      setTeammates((prev) => [...prev, emptyMember()]);
    }
  };

  const removeTeammate = (index) => {
    setTeammates((prev) => prev.filter((_, i) => i !== index));
  };

  /* ── submit ── */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitStatus("idle");
    setSubmitMessage("");

    if (!firstName.trim() || !phone.trim()) {
      setError("First name and phone number are required.");
      return;
    }

    if (!email.trim()) {
      setError("Email is required.");
      return;
    }

    if (!studentClass) {
      setError("Please select your class.");
      return;
    }

    if (!isValidPhone(phone)) {
      setError("Enter a valid 10-digit phone number.");
      return;
    }

    if (!ideaTitle.trim() || !brief.trim()) {
      setError("Idea title and brief are required.");
      return;
    }

    if (!videoUrl.trim()) {
      setError("A video URL presenting your idea is required.");
      return;
    }

    if (!teamName.trim()) {
      setError("Team name is required.");
      return;
    }

    const filledTeammates = teammates.filter(
      (t) => t.name.trim() && t.phone.trim(),
    );

    const invalidTeammate = filledTeammates.find((t) => !isValidPhone(t.phone));
    if (invalidTeammate) {
      setError(
        `Teammate "${invalidTeammate.name}" has an invalid phone number.`,
      );
      return;
    }

    const missingClass = filledTeammates.find((t) => !t.studentClass);
    if (missingClass) {
      setError(`Teammate "${missingClass.name}" needs a class selected.`);
      return;
    }

    const data = {
      leader: {
        firstName: firstName.trim(),
        email: email.trim(),
        phone: "+91" + phone.trim(),
        studentClass,
      },
      teamName: teamName.trim(),
      teammates: filledTeammates.map((t) => ({
        name: t.name.trim(),
        phone: "+91" + t.phone.trim(),
        studentClass: t.studentClass,
      })),
      ideaTitle: ideaTitle.trim(),
      brief: brief.trim(),
      videoUrl: videoUrl.trim(),
    };

    // ── Call API ──
    setSubmitStatus("submitting");
    try {
      const result = await submitIdea(data);
      if (result.success) {
        setSubmitStatus("success");
        setSubmitMessage(result.message || "Submitted successfully!");
        setTimeout(() => {
          resetForm();
          close();
        }, 2200);
      } else {
        setSubmitStatus("error");
        setSubmitMessage(result.message || "Something went wrong.");
      }
    } catch (err) {
      setSubmitStatus("error");
      setSubmitMessage("Network error. Please try again.");
    }
  };

  const dismissResult = () => {
    setSubmitStatus("idle");
    setSubmitMessage("");
  };

  return (
    <>
      {/* ═══════════ CTA CARD ═══════════ */}
      <div className={styles.ctaCard} onClick={open} id="ideaSubmit">
        {/* Floating particles */}
        <div className={styles.particles}>
          <span className={styles.particle} />
          <span className={styles.particle} />
          <span className={styles.particle} />
          <span className={styles.particle} />
          <span className={styles.particle} />
          <span className={styles.particle} />
          <span className={styles.particle} />
          <span className={styles.particle} />
        </div>

        {/* Glow ring behind bulb */}
        <div className={styles.glowRing} />

        {/* Lightbulb icon */}
        <div className={styles.bulbWrap}>
          <svg
            className={styles.bulbSvg}
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M32 4C21.507 4 13 12.507 13 23c0 6.629 3.412 12.468 8.571 15.857C23.143 40.429 24 42.571 24 45v1h16v-1c0-2.429.857-4.571 2.429-6.143C47.588 35.468 51 29.629 51 23 51 12.507 42.493 4 32 4z"
              fill="currentColor"
              opacity="0.15"
            />
            <path
              d="M32 4C21.507 4 13 12.507 13 23c0 6.629 3.412 12.468 8.571 15.857C23.143 40.429 24 42.571 24 45v1h16v-1c0-2.429.857-4.571 2.429-6.143C47.588 35.468 51 29.629 51 23 51 12.507 42.493 4 32 4z"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M24 50h16M26 54h12M24 46h16"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* Rays */}
            <line
              x1="32"
              y1="0"
              x2="32"
              y2="0"
              stroke="currentColor"
              strokeWidth="2"
              className={styles.ray}
            />
          </svg>

          {/* Animated rays around the bulb */}
          <div className={styles.rays}>
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>

        {/* Text content */}
        <div className={styles.ctaContent}>
          <p className={styles.ctaEyebrow}>IDEATHON OPEN</p>
          <h3
            className={`${styles.ctaTagline} ${taglineFade ? styles.fadeIn : styles.fadeOut}`}
          >
            {TAGLINES[taglineIndex]}
          </h3>
          <p className={styles.ctaSub}>
            Solo or team — pitch your startup idea and get it noticed
          </p>
        </div>

        {/* CTA button */}
        <div className={styles.ctaBtnWrap}>
          <span className={styles.ctaBtn}>
            Submit Your Idea
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
        </div>

        {/* Decorative corner accents */}
        <span className={styles.cornerTL} />
        <span className={styles.cornerBR} />
      </div>

      {/* ═══════════ MODAL ═══════════ */}
      <div
        className={`${styles.overlay} ${isOpen ? styles.open : ""}`}
        onClick={handleOverlayClick}
      >
        <div className={styles.modal}>
          <button className={styles.closeBtn} onClick={close}>
            ✕
          </button>

          {/* ── Result overlay ── */}
          {(submitStatus === "success" || submitStatus === "error") && (
            <div className={styles.resultOverlay}>
              {submitStatus === "success" ? (
                <div className={styles.resultContent}>
                  <svg
                    className={styles.resultIcon}
                    viewBox="0 0 80 80"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      className={styles.successCircle}
                      cx="40"
                      cy="40"
                      r="36"
                      fill="none"
                      stroke="#22c55e"
                      strokeWidth="3"
                    />
                    <path
                      className={styles.successTick}
                      d="M24 42 L34 52 L56 28"
                      fill="none"
                      stroke="#22c55e"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className={styles.resultText} style={{ color: "#22c55e" }}>
                    {submitMessage}
                  </p>
                </div>
              ) : (
                <div className={styles.resultContent}>
                  <svg
                    className={styles.resultIcon}
                    viewBox="0 0 80 80"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      className={styles.errorCircle}
                      cx="40"
                      cy="40"
                      r="36"
                      fill="none"
                      stroke="#ef4444"
                      strokeWidth="3"
                    />
                    <path
                      className={styles.errorX1}
                      d="M28 28 L52 52"
                      fill="none"
                      stroke="#ef4444"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                    <path
                      className={styles.errorX2}
                      d="M52 28 L28 52"
                      fill="none"
                      stroke="#ef4444"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                  <p className={styles.resultText} style={{ color: "#ef4444" }}>
                    {submitMessage}
                  </p>
                  <button
                    type="button"
                    className={styles.retryBtn}
                    onClick={dismissResult}
                  >
                    Try Again
                  </button>
                </div>
              )}
            </div>
          )}

          <h2 className={styles.modalTitle}>Idea-Drive</h2>

          <div className={styles.guidelines}>
            <p className={styles.guidelinesTagline}>
              Transform your innovative ideas into impactful startups!
            </p>
            <p className={styles.guidelinesDesc}>
              A platform to present, validate and refine your startup pitch
              among peers.
            </p>

            <div className={styles.guidelinesInfo}>
              <p>
                <strong>🎯 What is Idea-Drive?</strong>
                <br />
                An idea-pitch competition and a platform for IEDC Startup's own
                innovators, designed to identify high-potential ideas and
                provide mentorship &amp; recognition.
              </p>
              <p>
                <strong>👥 Who can join?</strong>
                <br />
                Students with innovative ideas!
              </p>
              <p>
                <strong>🏷️ Domains:</strong>
                <br />
                Biotechnology / Healthcare / Education / Smart Systems / Social
                Impact
              </p>
              {/* <p>
                <strong>📋 Submission Guideline:</strong>
                <br />
                Deadline — <em>14/02/2026</em>
              </p> */}
              <p>
                <strong>
                  🚀 Submit your original idea and be part of shaping the
                  future!
                </strong>
              </p>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <fieldset
              disabled={submitStatus === "submitting"}
              className={styles.fieldset}
            >
              {/* Name + Phone */}
              <label className={styles.label} style={{ marginBottom: -8 }}>
                Your Details{" "}
                <span style={{ fontWeight: 400, opacity: 0.5 }}>
                  (Team Leader)
                </span>
              </label>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label className={styles.label}>First Name</label>
                  <input
                    className={styles.input}
                    type="text"
                    placeholder="John"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Phone Number</label>
                  <div className={styles.phoneWrap}>
                    <span className={styles.phonePrefix}>+91 -</span>
                    <input
                      className={`${styles.input} ${styles.phoneInput}`}
                      type="tel"
                      inputMode="numeric"
                      placeholder="98765 43210"
                      maxLength={10}
                      value={phone}
                      onChange={(e) => {
                        const val = sanitizePhone(e.target.value);
                        setPhone(val);
                        setPhoneError(
                          val && !isValidPhone(val) && val.length === 10
                            ? "Invalid number"
                            : "",
                        );
                      }}
                    />
                  </div>
                  {phoneError && (
                    <span className={styles.fieldHint}>{phoneError}</span>
                  )}
                </div>
              </div>

              {/* Email + Class */}
              <div className={styles.row}>
                <div className={styles.field}>
                  <label className={styles.label}>Email</label>
                  <input
                    className={styles.input}
                    type="email"
                    placeholder="john@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Class</label>
                  <input
                    className={styles.input}
                    type="text"
                    placeholder="e.g. S6 E"
                    value={studentClass}
                    onChange={(e) => setStudentClass(e.target.value)}
                  />
                </div>
              </div>

              {/* Team Name */}
              <div className={styles.field}>
                <label className={styles.label}>Team Name</label>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="The Mavericks"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                />
              </div>

              {/* Teammates */}
              <div className={styles.teammatesSection}>
                <div className={styles.teammatesHeader}>
                  <span className={styles.teammatesTitle}>
                    Teammates ({teammates.length}/2)
                  </span>
                  <button
                    type="button"
                    className={styles.addBtn}
                    onClick={addTeammate}
                    disabled={teammates.length >= 2}
                  >
                    + Add
                  </button>
                </div>

                {teammates.map((mate, i) => (
                  <div key={i} className={styles.teammateRow}>
                    <button
                      type="button"
                      className={styles.removeBtn}
                      onClick={() => removeTeammate(i)}
                    >
                      ✕
                    </button>
                    <div className={styles.field}>
                      <input
                        className={styles.input}
                        type="text"
                        placeholder={`Teammate ${i + 1} name`}
                        value={mate.name}
                        onChange={(e) =>
                          updateTeammate(i, "name", e.target.value)
                        }
                      />
                    </div>
                    <div className={styles.field}>
                      <div className={styles.phoneWrap}>
                        <span className={styles.phonePrefix}>+91 -</span>
                        <input
                          className={`${styles.input} ${styles.phoneInput}`}
                          type="tel"
                          inputMode="numeric"
                          placeholder="Phone"
                          maxLength={10}
                          value={mate.phone}
                          onChange={(e) =>
                            updateTeammate(
                              i,
                              "phone",
                              sanitizePhone(e.target.value),
                            )
                          }
                        />
                      </div>
                    </div>
                    <div className={styles.field}>
                      <input
                        className={styles.input}
                        type="text"
                        placeholder="Class"
                        value={mate.studentClass}
                        onChange={(e) =>
                          updateTeammate(i, "studentClass", e.target.value)
                        }
                      />
                    </div>
                  </div>
                ))}
              </div>

              <hr className={styles.divider} />

              {/* Idea details */}
              <div className={styles.field}>
                <label className={styles.label}>Idea Title</label>
                <input
                  className={styles.input}
                  type="text"
                  required
                  placeholder="A one-liner for your idea"
                  value={ideaTitle}
                  onChange={(e) => setIdeaTitle(e.target.value)}
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Brief Description</label>
                <textarea
                  className={styles.textarea}
                  required
                  placeholder="Tell us what your idea is about..."
                  value={brief}
                  onChange={(e) => setBrief(e.target.value)}
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Video URL</label>
                <input
                  className={styles.input}
                  type="url"
                  required
                  placeholder="Link to a video presenting your idea"
                  value={videoUrl}
                  onChange={(e) => setVideoUrl(e.target.value)}
                />
                <div className={styles.videoGuidelines}>
                  <p className={styles.videoGuidelinesTitle}>
                    Participants must upload a short video clearly explaining
                    their idea. The video should cover the following points:
                  </p>
                  <ol className={styles.videoGuidelinesList}>
                    <li>
                      <strong>Problem Identification</strong> — What problem are
                      you solving and why it matters
                    </li>
                    <li>
                      <strong>Proposed Solution</strong> — Your idea and how it
                      works
                    </li>
                    <li>
                      <strong>Innovation &amp; Novelty</strong> — What makes
                      your idea unique
                    </li>
                    <li>
                      <strong>Feasibility &amp; Impact</strong> — Practicality
                      and potential impact
                    </li>
                    <li>
                      <strong>Duration: Maximum 3 minutes</strong>
                    </li>
                  </ol>
                  <p className={styles.videoGuidelinesNote}>
                    Orientation: Landscape preferred.
                    <br />
                    Original content only. Plagiarism results in instant
                    disqualification.
                  </p>
                </div>
              </div>

              {error && <p className={styles.error}>{error}</p>}

              <button
                type="submit"
                className={styles.submitBtn}
                disabled={submitStatus === "submitting"}
              >
                {submitStatus === "submitting" ? (
                  <span className={styles.spinnerWrap}>
                    <span className={styles.spinner} />
                    Submitting…
                  </span>
                ) : (
                  "Submit"
                )}
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
}
