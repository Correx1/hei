export interface ServiceSectionMedia {
  type: 'video' | 'image';
  url: string;
}

export interface ServiceSection {
  kicker?: string;
  heading: string;
  headingUrl?: string;
  buttonText?: string;
  buttonUrl?: string;
  paragraphs: string[];
  media?: ServiceSectionMedia;
  galleryMedia?: ServiceSectionMedia[];
  mediaPosition?: 'left' | 'right';
  mediaClassName?: string;
  isCenteredEmphasis?: boolean;
}

export interface ServiceStat {
  value: string;
  label: string;
}

export interface ServiceCallout {
  title: string;
  stats: ServiceStat[];
}

export interface ServiceMedia {
  type: 'video' | 'image';
  url: string;
  title?: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  heroImage: string;
  sections: ServiceSection[];
  media?: ServiceMedia[];
  callout?: ServiceCallout;
}

export const servicesData: ServiceData[] = [
  {
    slug: "hospital-bills",
    title: "HOSPITAL BILL FINANCIAL AID",
    heroImage:"/campaign.jpg",
    sections: [
      {
        heading: "Medical Intervention",
        paragraphs: [
          "This program ensures that low-income members of society, particularly children aged 0-12, have access to basic healthcare up to N30,000. This is achieved by fully paying the hospital bills of qualified victims after thorough verification. Having partnered with over 39 public hospitals, we have supported over 700 cases, with a projection to help 65,000 indigent patients in the next 4 years."
        ],
        media: {
          type: 'image',
          url: "/campaign.jpg"
        },
        mediaPosition: 'right'
      },
      {
        heading: "Save a Life",
        headingUrl: "/donate",
        paragraphs: [
          "One of the realities that life presents is the disparity in healthcare access: the wealthy can easily obtain quality care, while the poor struggle to secure even basic medical services. In Nigeria's socio-economic landscape, the financially disadvantaged face significant obstacles in accessing essential healthcare. Due to financial constraints, they often cannot afford the best medicines, leading to compromises in their treatment and the purchase of cheaper, less effective drugs that may further jeopardize their health.",
          "For instance, an indigent patient that earns less than N500 per day with a family of five to support, will not be able to afford adequate treatment for certain medical conditions or be able to afford necessary vaccines for their children against preventable diseases. Lack of funds often forces the poor to ignore early symptoms of severe conditions like Sepsis, Jaundice, Malaria, Pneumonia, and Malnutrition, which can further endanger their lives.",
          "HEI addresses this critical issue through Project 1 Million, which provides swift financial assistance to vulnerable patients in emergency situations at public health institutions. We invite you to Support HEI's Project 1 Million in the pursuit of saving more lives and reflecting our moto 'That None Shall Die'."
        ],
        media: {
          type: 'image',
          url: "/outreach.jpg"
        },
        mediaPosition: 'left'
      },
      {
        heading: "",
        paragraphs: [
          "We are committed to providing medical interventions to indigent and vulnerable patients in public hospitals, saving lives, and nurturing their dreams."
        ],
        isCenteredEmphasis: true
      }
    ],
    media: [
      {
        type: 'video',
        url: "https://www.youtube.com/embed/FJsEweQZewI?rel=0",
        title: ""
      }
    ],
    callout: {
      title: "MEDICAL INTERVENTION BY HEALTH EMERGENCY INITIATIVE",
      stats: [
        {
          value: "OVER 7,200",
          label: "Hospital Bills of indigent Patients Paid"
        }
      ]
    }
  },
  {
    slug: "post-crash-care",
    title: "POST-CRASH CARE",
    heroImage: "/frsc.jpg",
    sections: [
      {
        kicker: "That none should die…",
        heading: "Post-crash care",
        paragraphs: [
          "Road traffic accident has been reported as the biggest killer of youth in Nigeria. Nigeria has been losing a portion of her productive population to needless deaths. At Health Emergency Initiative we understand that one way to come in to be able to combat this issue is through the provision of post-crash care to road traffic emergency victims."
        ],
        media: {
          type: 'image',
          url: "/frsc.jpg"
        },
        mediaPosition: 'right'
      },
      {
        heading: "Save a Life Now",
        headingUrl: "/donate",
        paragraphs: [
          "The aim of <a href='https://www.who.int/violence_injury_prevention/road_traffic/activities/roadsafety_training_manual_unit_5.pdf?ua=1' target='_blank' rel='noopener noreferrer' class='text-[#E51924] font-medium hover:underline'>post-crash care</a> is to avoid preventable death and disability, limit severity of injury and the suffering caused by it in order to ensure the crash survivor’s best possible recovery and reintegration into society. The level of care/attention that emergency victims receive determines their chances and the quality of survival.",
          "The “Golden hour” which is the first few minutes/hour is an important determinant of the road traffic accident victims’ survival.",
          "The “Golden hour” is golden to HEI too, hence we emerge to save the emergency victims’ lives with swift provision of funds. You can join us in the provision of post-crash care with of emergency funds, <a href='/project-1m' class='text-[#E51924] font-medium hover:underline'>support PROJECT 1 MILLION</a> and let’s reach out more to prevent needless deaths.",
          "Health Emergency Initiative (HEI) over the years has been diligently providing financial assistance to indigent/vulnerable patients in public hospitals.",
          "HEI upholds THAT NONE SHOULD DIE and we work closely with Federal Road Safety Corps (FRSC) to ensure that swift financial assistance is provided to road traffic accident victims in order to provide post-crash care to the emergency victims.",
        ],
        media: {
          type: 'image',
          url: "/walk.jpg"
        },
        mediaPosition: 'left'
      },
      {
        heading: "",
        paragraphs: [
          "HEI provides post crash care to road accident victims and functions as their NEXT OF KIN by swiftly providing funds needed for emergency medical treatment to resuscitate and stabilize these emergency victims"
        ],
        isCenteredEmphasis: true
      }
    ],
    media: [
      {
        type: 'video',
        url: "https://www.youtube.com/embed/EE8i_7ZnCrE?rel=0",
        title: "FRSC Assistant Corps Marshal on HEI Impacts"
      }
    ],
    callout: {
      title: "POST CRASH CARE",
      stats: [
        {
          value: "805",
          label: "POST CRASH CARE VICTIMS SAVED"
        }
      ]
    }
  },
  {
    slug: "cpr-training",
    title: "FIRST RESPONDERS TRAINING SCHEME",
    heroImage: "/training.jpg",
    sections: [
      {
        heading: "First Responders/CPR Training Scheme",
        paragraphs: [
          "Besides responding directly to emergencies, we work to improve the speed and performance of First Responders during the critical first hours (golden hour). We do so by investing in and strengthening communities’ ability to prepare for and cope with emergencies.",
          "We have trained government officials, institutions and corporate organizations in CPR, First Aid and other critical emergency response skills. This training has been extended to artisans (vulcanizers, towing van operators, commercial transporters, filling station attendants, dispatch riders, etc), Youth Corpers and secondary/tertiary school students. The Lagos State Commissioner of Education’s recent approval to train all secondary school students in the state boosts this initiative. Total numbers of first responders trained to date are well over 46,000 persons. Ongoing deployment of the iResponder mobile application will give impetus to train more than half a million Lay First Responders across Nigeria in the next 3 years.",
          "Health Emergency Initiative(HEI) is steadily changing the narrative of onlookers’ habit of taking pictures or videos at emergency scene rather than help the emergency victims to survive. HEI organises first responders training that provide effective First Responders who can doubly increase the chances of survival of emergency victims. HEI also conducts this training for organizational staff as well as CSR on behalf of businesses, schools, youth groups, women, and other groups."
        ],
        media: {
          type: 'image',
          url: "/training2.jpg"
        },
        mediaPosition: 'right'
      },
      {
        heading: "First Responders/CPR gallery",
        buttonText: "Sign up",
        buttonUrl: "/first-responders-scheme",
        paragraphs: [
          "Health Emergency Initiative’s First Responders training is an intensive 2 day training where the participants are examined after training and are certified by American Heart Association as a First Responder.",
          "The importance of being an effectively trained First Responders cannot be over-emphasized.",
          "The First Response lifesaving skills can determine whether a person survives or dies during an emergency. Usually, when a person suddenly slumps, it is due to what is called cardiac arrest.",
          "A person suffering from cardiac arrest will collapse, become unconscious and suddenly stop breathing because the heart has stopped. The aim of First Aid is to jump-start the heart externally by administering CPR.",
          "Emergency can happen anytime, any place. Hence, there is a need for First Responders everywhere.",
          "Every Home, Workplace, Church, Mosque, School, Mall, Football Pitch etc. MUST have a First Aider."
        ],
        media: {
          type: 'image',
          url: "/training3.jpg"
        },
        mediaPosition: 'left'
      },
      {
        heading: "",
        paragraphs: [
          "Lives lost to needless and avoidable deaths can never be regained! Take action today by becoming a Certified First Responder because that life you would save might be yours."
        ],
        isCenteredEmphasis: true
      }
    ],
    media: [
      {
        type: 'video',
        url: "https://www.youtube.com/embed/A2WDBw-8XGs?rel=0",
        title: "First Responders Training Overview Video"
      }
    ],
    callout: {
      title: "NUMBER OF FIRST RESPONDERS TRAINED",
      stats: [
        {
          value: "46,000 PLUS",
          label: ""
        }
      ]
    }
  },
  {
    slug: "ppe-donations",
    title: "PPE DONATIONS",
    heroImage: "/ppe-donation.jpg",
    sections: [
      {
        heading: "Guard against covid-19",
        paragraphs: [
          "<strong class='text-[16px] md:text-[18px] text-brand-dark block mb-2 font-bold'>Providing Personal Protective Equipment (PPE) to Healthworkers</strong>Each PPE protects our health workers and encourages them",
          "Health Emergency Initiative(HEI) as a Nonprofit that relentlessly works to save lives even in this Covid-19 pandemic.",
          "Hence, an emergency trust fund was created to raise personal protective equipment for health workers who are at the frontline in the fight against Covid-19.",
          "So far, HEI has donated over 48 million naira worth of PPE to public institutions including Nigerian Institute of Medical Research(NIMR), Isolation Centers, Federal Road Safety Corps(FRSC) and some public hospitals."
        ],
        media: {
          type: 'image',
          url: "/ppe.jpeg"
        },
        mediaPosition: 'right'
      },
      {
        heading: "Paschal Achunine",
        paragraphs: [
          "<blockquote class='border-l-4 border-[#E51924] pl-5 md:pl-6 py-3 my-2 bg-[#fcfbf9] rounded-r text-[16px] md:text-[17px] text-gray-700 leading-relaxed italic shadow-sm'>Paschal and HEI have provided PPEs to many hospitals and health centres in Lagos. This ensures that the health workers can boldly attend to their duties without fears of contacting the disease and spreading it to their families. They have also provided face masks to the Lagos people especially traders and all those who work in public places. The enlightenment campaigns are lifesaving because the majority of our people do not believe that COVID-19 is real and this is the biggest problem the health sector is facing to stem the tide of this scourge COVID-19.</blockquote>"
        ],
        media: {
          type: 'image',
          url: "/director.jpg"
        },
        mediaPosition: 'left',
        mediaClassName: 'w-[280px] aspect-[4/5] md:w-[360px] mx-auto shrink-0 shadow-[0_8px_30px_-4px_rgba(0,0,0,0.2)]'
      },
      {
        heading: "",
        paragraphs: [
          "Support Health Emergency Initiative’s Emergency Trust Fund and let’s provide more personal protective equipment (PPE) to more health workers."
        ],
        buttonText: "DONATE",
        buttonUrl: "/donate",
        isCenteredEmphasis: true
      }
    ],
    media: [
      {
        type: 'video',
        url: "https://www.youtube.com/embed/WlDTNpyVVL4?rel=0",
        title: "PPE Donations Impact Video"
      }
    ]
  },
  {
    slug: "outreach",
    title: "OUTREACH PROGRAMS",
    heroImage: "/outreach2.jpg",
    sections: [
      {
        heading: "Outreach Programmes",
        paragraphs: [
          "Access to basic medical healthcare is a major challenge in Nigeria. Hence, we embark on periodic outreach to provide some free basic medical supplies for them and safety advocacy to these communities.",
          "<a href='/volunteer' class='inline-block text-[#E51924] underline font-bold text-[14px] md:text-[15px] hover:text-brand-blue transition-colors uppercase tracking-widest mt-1 mb-2'>Join us</a>",
          "<strong class='text-[15px] md:text-[16px] text-brand-dark block mt-2 font-bold'>Access to basic healthcare has been a challenge in the Nigerian society.</strong>",
          "Hence, HEI embarks on outreach programmes to communities to provide some free basic medical supplies and also enlighten them on safety measures to live a healthy life."
        ],
        media: {
          type: 'image',
          url: "/outreach2.jpg"
        },
        mediaPosition: 'right'
      },
      {
        heading: "Outreach gallery",
        paragraphs: [
          "We do more than advocacy, we walk the talk.",
          "<a href='/volunteer' class='inline-block text-[#E51924] font-medium hover:underline hover:text-brand-blue transition-colors'>Join us to save more lives.</a>"
        ],
        galleryMedia: [
          { type: 'image', url: '/campaign.jpg' },
          { type: 'image', url: '/outreach3.jpg' },
          { type: 'image', url: '/outreach4.jpg' },
          { type: 'image', url: '/outreach5.jpg' }
        ]
      },
      {
        heading: "",
        paragraphs: [
          "Geographical boundaries or socioeconomic status should never dictate who lives or dies. We are relentlessly taking basic healthcare straight to the doorsteps of vulnerable communities, proving that together, we can truly uphold that none should die."
        ],
        isCenteredEmphasis: true
      }
    ],
    media: [
      {
        type: 'video',
        url: "https://www.youtube.com/embed/RvhJxb112SA?rel=0",
        title: "Outreach Programmes Highlight"
      }
    ]
  }
];
