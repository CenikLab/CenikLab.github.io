---
layout: page
title: A computational framework to understand translational control
html: True
permalink: /lab_research-ribo-ecosystem
summary: We develop machine learning models to integrate quantitative measurements of translation into cohesive, predictive frameworks.
---

<center>
<!-- <h1> A computational ecosystem to understand translation</h1> -->
</center>

<p>
  <center>
  <img src="/img/publications/2020_bioinfomatics.jpg" alt="Ribo Ecosystem" style="width:400px;">
  </center>
</p>

<p>
Accurately predicting gene expression across biological contexts requires reliable and reusable data.  Ribosome profiling has become a key method for measuring translation, but much of the existing data is scattered across general-purpose databases with poor metadata, limiting reuse and integrative analyses.

To address this, we manually curated and uniformly reprocessed over 3,500 ribosome profiling experiments. These have been enabled by a computational ecosystem around a dedicated binary hierarchical data format to efficiently store,
organize and process ribosome profiling data that <a href="https://academic.oup.com/bioinformatics/article/36/9/2929/5701654">we have developed</a>. This effort provided us with a large-scale, high-quality compendium of translation efficiency (TE) data across diverse biological conditions.
</p>

<p>
Inspired by how co-expression of RNA reveals gene function and regulatory programs, we introduced the concept of translation efficiency covariation (TEC). TEC turns out to be a conserved and biologically meaningful signal, reflecting coordinated translational control. It also uncovers new regulatory mechanisms and can predict protein–protein interactions and gene functions. For instance, TEC revealed a novel regulator of glycolysis that was invisible to RNA expression and protein abundance analyses (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11326257/">Liu et al.</a>).
</p>

<p>
We have also developed RiboNN, a deep neural network that predicts cell-type-specific translation efficiency from full-length mRNA sequences (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11326250/">Zheng et al.</a>). Trained on our large compendium, RiboNN is the most accurate model of translation to date. Beyond prediction, the model reveals sequence features linked to translation, mRNA stability, and localization.

These tools and insights open the door to new applications in synthetic biology and therapeutics. RiboNN can help interpret the effects of genetic variants on translation and guide the design of optimized mRNA-based therapies, with implications for both diagnostics and treatment of genetic diseases.
</p>

<p>
We emphasize development of reusable, portable and <a href="https://github.com/CenikLab/">open source software</a>.
</p>