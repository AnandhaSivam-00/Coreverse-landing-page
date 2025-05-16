export const headingVariants = {
    initial: {
        opacity: 0,
        y: 20
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            ease: "easeInOut",
            staggerChildren: 0.2
        }
    },
    whileInView: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            ease: "easeInOut",
            staggerChildren: 0.2
        }
    },
    viewport: {
        once: false,
        amount: 0.5
    }
}

export const paragraphVariants = {
    initial: {
        opacity: 0,
        y: 20
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            delay: 0.2,
            ease: "easeInOut",
            staggerChildren: 0.2
        }
    },
    whileInView: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            delay: 0.2,
            ease: "easeInOut",
            staggerChildren: 0.2
        }
    },
    viewport: {
        once: false,
        amount: 0.5
    }
}

export const buttonVariants = {
    initial: {
        opacity: 0,
    },
    whileInView: {
        opacity: 1,
        transition: {
            duration: 1,
            delay: 0.5,
            ease: "easeInOut",
            staggerChildren: 0.2
        }
    },
    viewport: {
        once: false,
        amount: 0.5
    }
}

export const sectionpillVariants = {
    initial: {
        opacity: 0,
    },
    whileInView: {
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeInOut",
        }
    },
    viewport: {
        once: false,
        amount: 0.5
    }
}

export const cardVariants = {
    initial: {
        opacity: 0,
        y: 20
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            ease: "easeInOut",
            staggerChildren: 0.2
        }
    },
    whileInView: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            delay: 0.7,
            ease: "easeInOut",
            staggerChildren: 0.2
        }
    },
    viewport: {
        once: false,
        amount: 0.5
    }
}

export const testimonialCardVariants = {
    initial: {
        opacity: 0.6
    },
    whileHover: {
        opacity: 1,
        transition: {
            duration: 0.3,
            ease: 'easeInOut',
            type: 'tween'
        },
    },
    viewport: {
        once: false,
        amount: 0.5
    }
}

export const ellipseFiveVariant = {
    initial: {
        scale: 1,
    },
    whileHover: {
        scale: 0.8,
        transition: {
            duration: 1,
            ease: [0.34, 1.56, 0.64, 1],
            // ease: "easeInOut",
        }
    },
    diskTransition: {
        type: "spring",
        stiffness: 200,
        damping: 12,    
        mass: 1.1       
    },
    animate: {
        scale: [0.95, 1, 0.98, 1.02, 1],
        transition: {
            duration: 2.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
}
  
export const serviceCardVariants = {
    initial: {
        opacity: 0,
        y: 50,
        scale: 0.8,
    },
    whileInView: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            delay: 0.5,
            ease: "easeInOut",
            staggerChildren: 0.2
        }
    },
    viewport: {
        once: false,
        amount: 0.5
    }
}
