---
title: "Statistics & data science cheat sheet"
tags:
  - data-science
  - math
  - programming
  - statistics
  - wiki
layout: page
permalink: /wiki/f9bcdb30/
---

> **NOTE:** The stuff below was mostly produced by Claude, though I edited it a little bit. As I write this, I'm pretty sure it's the only AI-generated content I've included on my website so far. I'm not sure how I feel about that fact, but I'm going to leave it up for now because I need to refer back to it occasionally.

### Variable types

- **Categorical (qualitative)**
  - **Nominal**
    - Description: Categories with no inherent order; can be counted but not ranked. (A two-level nominal variable is called binary/dichotomous.)
    - Examples: Eye color, country, blood type, true/false
    - Operations: = and ≠ only
    - Central tendency: Mode
    - Spread: None standard (proportions, entropy)
    - Plots: Bar chart, pie chart, frequency table
    - Tests: Chi-square, Fisher's exact
  - **Ordinal**
    - Description: Ordered categories, but with unequal or undefined spacing between them; no arithmetic on the values.
    - Examples: Education level, Likert scales, survey ratings
    - Operations: =, ≠, <, >
    - Central tendency: Median, mode
    - Spread: Range, IQR, percentiles
    - Plots: Ordered bar chart, ordered box plot
    - Tests: Mann–Whitney U, Wilcoxon, Kruskal–Wallis, Spearman/Kendall correlation
- **Numerical (quantitative)**
  - Spacing / zero / arithmetic axis
    - **Interval**
      - Description: Ordered with equal spacing, but no true zero (zero is arbitrary), so ratios are meaningless.
      - Examples: Temperature in °C/°F, calendar years, IQ scores
      - Operations: +, − (differences are meaningful); no ×, ÷
      - Central tendency: Mean, median, mode
      - Spread: SD, variance, range, IQR
      - Plots: Histogram, box plot, line chart
      - Tests: t-test, ANOVA, Pearson correlation, linear regression
    - **Ratio**
      - Description: Like interval, but with a true/meaningful zero, so ratios ("twice as much") are valid.
      - Examples: Height, weight, age, income, counts
      - Operations: All arithmetic, including × and ÷
      - Central tendency: Mean, median, mode, plus geometric/harmonic mean
      - Spread: SD, variance, range, IQR, plus coefficient of variation
      - Plots: Histogram, box plot, scatter plot
      - Tests: Same parametric family as interval (t-test, ANOVA, regression)
  - Continuity / probability / distribution axis
    - **Discrete**
      - Description: Countable, isolated values; individual points carry nonzero probability (described by a PMF). Gaps between values are meaningful.
      - Examples: Number of children, cars sold (ratio); calendar year (interval)
      - Probability: P(X = k) is meaningful
      - Distributions: Poisson, negative binomial, binomial, geometric
      - Plots: Stem plot, spike/bar plot (one value per bar)
      - Tests/models: Poisson & negative-binomial regression, chi-square goodness-of-fit
    - **Continuous**
      - Description: Any value in a range; only intervals carry probability, P(X = exact value) = 0 (described by a PDF). Partly a matter of measurement resolution.
      - Examples: Height, weight, time (ratio); temperature in °C (interval)
      - Probability: Only P(a ≤ X ≤ b) is meaningful
      - Distributions: Normal, gamma, exponential, beta, log-normal
      - Plots: Histogram (binned), density plot / KDE
      - Tests/models: t-test, linear regression, Kolmogorov–Smirnov

Since there are two independent axes among numerical variables, there are actually _four_ numerical variable types in total:

1. Interval & discrete (e.g., calendar year (1999, 2000, etc.))
2. Interval & continuous (e.g., temperature in °C/°F)
3. Ratio & discrete (e.g., counts like number of children, number of cars sold, etc.)
4. Ratio & continuous (e.g., height, weight, time, income, etc.)

Also, regarding the continuity axis, an important thing to keep in mind is _measurement resolution_. Age is actually continuous; but if you record it as whole years, then it behaves discretely in your data. Money is technically discrete (down to the cent), but it's usually treated as continuous because the steps are so fine relative to the range.
