"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

function HeaderComponent() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="brand">
          <Link legacyBehavior href="/">
            <Image
              src="/assets/images/friends_in_flats_logo.jpeg"
              alt="Logo"
              width={50}
              height={50}
              className="object-contain"
            />
          </Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link legacyBehavior href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/help">
              <a>Help</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/mission">
              <a>Mission</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/login">
              <a className="login-btn">Login</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderComponent;
