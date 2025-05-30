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

<div style="text-align: center;">
  <img src="/img/publications/2020_bioinfomatics.jpg" alt="Ribo Ecosystem" style="width:400px;">
</div>


<p>
Predictive models of gene expression require reliable and reusable data. We developed a software framework around a compact binary hierarchical data format to efficiently store, process (<a href="https://academic.oup.com/bioinformatics/article/36/9/2929/5701654"><em>Ozadam, Geng, and Cenik.</em> <em>Bioinformatics</em></a>), and visualize ribosome profiling data (<a href="https://academic.oup.com/bioinformatics/article/40/6/btae369/7696317"><em>Chacko, Ozadam, and Cenik.</em> <em>Bioinformatics</em></a>).
</p>

<p>
Using this infrastructure, we manually curated and uniformly reprocessed over 3,500 ribosome profiling experiments. This effort yielded a high-quality compendium of translation efficiency measurements across diverse cell types. Inspired by how co-expression of RNA reveals gene function and regulatory programs, we introduced the concept of translation efficiency covariation (TEC), a conserved property of mammalian transcriptomes, reflecting coordinated translational control. TEC is predictive of protein–protein interactions and gene functions. For instance, we discovered a regulator of glycolysis that was missed by RNA expression and protein abundance analyses (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11326257/">Liu et al. Nature Biotechnology, in press</a>).
</p>
<p>
We have also developed RiboNN, a deep neural network that predicts cell-type-specific translation efficiency from full-length mRNA sequences (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11326250/">Zheng et al. Nature Biotechnology, in press</a>). Trained on our large compendium, RiboNN is the most accurate model of translation to date. Beyond prediction, the model reveals sequence features linked to translation, mRNA stability, and localization. RiboNN can help interpret the effects of genetic variants on translation and guide the design of optimized mRNA-based therapies, with implications for both diagnostics and treatment of genetic diseases.
</p>

<p>
We emphasize the development of reusable, portable, and <a href="https://github.com/CenikLab/">open-source software</a>.
</p>