"use client";

import React from "react";
import Link from "next/link";
import Reveal from "./Reveal";

export default function WorkCTA() {
  return (
    <section className="work-cta">
      <div className="work-cta-inner">
        <Reveal>
          <div className="work-cta-eyebrow">UNE IDÉE DE PROJET ?</div>
        </Reveal>

        <Reveal delay={150}>
          <div className="work-cta-main">
            <h2 className="work-cta-heading">Construisons quelque chose d'utile.</h2>
            <Link href="/#contact" className="work-cta-button">
              Me recruter →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
