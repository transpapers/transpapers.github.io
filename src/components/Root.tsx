/**
 * Copyright 2023, 2024 Sasha Lišková and Stephanie Beckon
 *
 * This file is part of Transpapers.
 *
 * Transpapers is free software: you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option) any later
 * version.
 *
 * Transpapers is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU General Public License for more
 * details.
 *
 * You should have received a copy of the GNU General Public License along with
 * Transpapers. If not, see <https://www.gnu.org/licenses/>.
 */

import * as React from 'react';

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import Header from './Header';
import Noscript from './Noscript';

export default function Root() {
  const { handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = () => {
    navigate('./step1');
  };

  return (
    <main>
      <section>
        <p>
          <strong>In the news:</strong>
          {' '}
          Transpapers has been covered in
          {' '}
          <a
            href="https://xtramagazine.com/power/identity/transpapers-michigan-259355"
          >
            Xtra Magazine
          </a
            >
          {' '}
          (17 November 2023) and
          {' '}
          <a
            href="https://pridesource.com/article/transpapers-a-free-michigan-made-resource-for-trans-empowerment-across-the-u-s"
          >
            PrideSource
          </a
            >
          {' '}
          (27 December 2023).
        </p>

        <p>
          <strong>What is this?</strong>
          {' '}
          Transpapers is a trans-run, privacy-focused, free (
          <a
            href="https://en.wikipedia.org/wiki/Free_software"
          >
            <em>libre</em>
          </a
            >
          ) web service that aims to lessen the burden of filing all those
          forms to have the state legally affirm your gender. This may be
          necessary for your mental health, personal safety, and/or affirming
          medical care.
        </p>
        <p>
          <strong>How do I use it?</strong>
          {' '}
          Select your birth state, current state of residence, and the
          information you wish to change. Fill out the form that appears and
          press "Download gender-affirming documents". Your browser will then
          download a PDF file comprising the forms you need to file, as well as
          a personalized guide to filing them. The forms will be prefilled using
          the information you entered.
        </p>
        <p>
          <strong>Is it safe to enter my personal data?</strong>
          {' '}
          Yes. Everything happens client-side; that is to say, on your computer.
          Your personal data will never be collected, retained, or in any way
          transmitted over the Internet. The especially privacy-conscious can
          even
          {' '}
          <a
            href="https://github.com/transpapers/transpapers.github.io/wiki#local-usage"
          >
            run the tool locally and offline.
          </a
            >
          {' '}
          (You should, however, ensure that your browser points to
          {' '}
          <a href="https://transpapers.lgbt">https://transpapers.lgbt</a>
          ; other
          addresses may not be secure.)
        </p>
        <p>
          <strong>My state isn't listed.</strong>
          {' '}
          Transpapers is developed by
          two people with day jobs. It's a lot of work to automate the legal
          processes of fifty-five states and territories. Send us a request at
          the feedback form below and we'll add it to the list. If you're a
          programmer, send us a pull request.
        </p>
        <p>
          Any bugs, issues, tips, etc. relating to legal processes should be reported at
          {' '}
          <a href="https://tinyurl.com/mgdc-feedback">our feedback form.</a>
          {' '}
          Any bugs, issues, tips, etc. relating to the codebase should be reported on
          {' '}
          <a href="https://github.com/transpapers/transpapers.github.io">GitHub.</a>
        </p>
        <p>
          View our source code on
          {' '}
          <a href="https://github.com/transpapers/transpapers.github.io">
            GitHub.
          </a
            >
        </p>
      </section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="submit" value="Ready to get started?" />
      </form>
    </main>
  );
}
