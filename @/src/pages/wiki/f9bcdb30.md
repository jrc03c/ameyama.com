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

#### Taxonomy

**Categorical (qualitative)**

- Nominal — categories with no inherent order. Examples: eye color, country, blood type. You can count them but not rank them.
- Ordinal — categories with a meaningful order, but unequal or undefined spacing between them. Examples: education level (HS < BA < MA), Likert scales (disagree → agree), survey ratings.
- Binary / dichotomous — a special nominal case with exactly two levels (yes/no, true/false). Sometimes broken out separately.

**Numerical (quantitative)**

- Interval — ordered, with equal spacing, but no true zero (zero is arbitrary). Ratios are meaningless. Examples: temperature in °C/°F, calendar years, IQ scores.
- Ratio — ordered, equal spacing, and a true/meaningful zero, so ratios make sense ("twice as much"). Examples: height, weight, age, income, counts.

Numerical is also often split by another axis:

- Discrete — countable, whole-number values (number of children, dice roll).
- Continuous — any value in a range (height, time, temperature).

**Quick memory aids**

- The classic Stevens hierarchy is Nominal → Ordinal → Interval → Ratio (NOIR), increasing in mathematical structure.
- Fast test: Can you order it? (no → nominal). Are gaps equal? (no → ordinal). Is zero meaningful? (no → interval; yes → ratio).

#### Operations, plots, tests, etc.

**Nominal**

- Operations: = and ≠ only (grouping, counting).
- Central tendency: mode.
- Spread: none standard (can use entropy / proportions).
- Plots: bar chart, pie chart, frequency table.
- Tests: chi-square, Fisher's exact.

**Ordinal**

- Operations: =, ≠, <, > (ranking), but not arithmetic on the values.
- Central tendency: median, mode.
- Spread: range, IQR, percentiles.
- Plots: bar chart (ordered), ordered box plot.
- Tests: Mann–Whitney U, Wilcoxon, Kruskal–Wallis, Spearman/Kendall correlation.

**Interval**

- Operations: add/subtract (differences are meaningful); no multiply/divide.
- Central tendency: mean, median, mode.
- Spread: standard deviation, variance, range, IQR.
- Plots: histogram, box plot, line chart.
- Tests: t-test, ANOVA, Pearson correlation, regression.

**Ratio**

- Operations: all arithmetic including ratios (÷, ×) — "twice as much" is valid.
- Central tendency: all of the above, plus geometric/harmonic mean (valid because of the true zero).
- Spread: all of the above, plus coefficient of variation (SD ÷ mean).
- Plots: histogram, box plot, scatter plot.
- Tests: same parametric family as interval (t-test, ANOVA, regression).

The key pattern is that each level inherits everything the level below it can do and adds one new capability:

- Ordinal adds order.
- Interval adds meaningful distances.
- Ratio adds meaningful ratios (via a true zero).

So a method valid for a lower level is always valid for a higher one. For example, you can treat ratio data with ordinal methods (e.g., rank it), but not the reverse.
