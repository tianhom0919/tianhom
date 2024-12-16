---
sidebar_position: 1
---

# About MCUT Tutorials

MCUT Tutorials provides a comprehensive guide to implement a MOIL image application on an embedded system. It covers essential hardware and software preparation, development setup, and step-by-step instructions to achieve various objectives using the Renesas RZ/G2L Evaluation Kit.

---

## Prerequisites

**Development Environment:**
A PC with Ubuntu 22.04 installed will serve as the base development environment for building Yocto projects. For optimal performance, a system with a high-speed CPU, ample RAM, and at least 500 GB of free HDD storage is recommended.

**Embedded Hardware:**
The Renesas RZ/G2L Evaluation Kit (EVK) will be used as the target embedded system for this tutorial.

---

## Tutorial Outline

### 1. Setup and Basics

- Prepare the environment and learn basic Linux commands.
- Build a Yocto Linux project using instructions from Renesas's BSP (Board Support Package) resources.
- Run the resulting image on the RZ/G2L hardware.

### 2. GStreamer Framework

- Learn to use GStreamer for creating streaming media applications.
- Integrate and test the MOIL Equirectangular GStreamer element within a Yocto project and execute it on the RZ/G2L.

### 3. Qt Framework

- Install Qt and set up cross-platform toolkits.
- Compile and execute the Coffee Machine project on the RZ/G2L.
- Explore Qt Quick Controls and QML for creating touch-screen user interfaces.


## Topics and Objectives

### 1. Renesas RZ/G2L

**Overview:** A general-purpose microprocessor featuring CPUs, a 3D graphics engine, and a video codec engine.
**Objective:** Successfully build the Renesas BSP Yocto project on a PC and run the resulting image on the RZ/G2L.

### 2. Yocto Project

**Overview:** An open-source collaboration project for creating custom Linux-based systems, independent of hardware architecture.
**Objective:** Build and deploy a Yocto project for the Renesas RZ/G2L.

### 3. GStreamer

**Overview:** A versatile framework for streaming media applications. This tutorial focuses on integrating the MOIL Equirectangular GStreamer element into the Yocto project for testing on the RZ/G2L.
**Objective:** Run the MOIL GStreamer element on the RZ/G2L.

### 4. Qt Framework

**Overview:** A cross-platform framework for creating applications, especially user interfaces. It supports Qt Quick and QML for touch-screen applications.
**Objective:** Compile and execute the Coffee Machine example project on the RZ/G2L.

## Required Skills and Knowledge

### Basic Knowledge
- Ubuntu 22.04 installation
- Linux command-line interface (CLI)
- Linux apt package management
- Basic programming in C and C++
- Familiarity with GitHub and Visual Studio Code

### Advanced Knowledge
- Node.js and npm
- Documentation tools such as Docusaurus

The weekly tutorials are designed to provide a step-by-step roadmap for achieving proficiency in embedded system development using the Renesas RZ/G2L and associated tools. By the end, you will have successfully deployed a functional MOIL image application and explored advanced Linux development workflows.

---

## References

- [Renesas RZ/G2L](https://www.renesas.com/en/products/microcontrollers-microprocessors/rz-mpus/rzg2l-general-purpose-mpu-dual-core-arm-cortex-a55-cpus-and-single-core-cortex-m33-cpu-3d-graphics-and#overview)
- [Yocto Project](https://www.yoctoproject.org/)
- [GStreamer](https://gstreamer.freedesktop.org/)
- [Qt](https://www.qt.io/)

---