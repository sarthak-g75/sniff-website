import React from 'react'

const BreedingTips = () => {
  return (
    <div className='px-6 py-10 text-gray-800 p lg:py-16'>
      <div className='max-w-4xl mx-auto'>
        <div className='flex flex-col items-center gap-4 pb-8 lg:gap-0 lg:flex-row lg:justify-between lg:space-x-10'>
          <h1 className='text-3xl font-medium text-left lg:w-1/2 lg:text-5xl'>
            Breeding Tips for Pet Parents on Sniff-It
          </h1>
          <div className='flex flex-col gap-4 lg:w-1/2 '>
            <p className='text-gray-600'>
              When offering breeding tips on Sniff-It, it’s essential to focus
              on responsible practices that prioritize the pets’ health, safety,
              and well-being. Here are some key breeding tips that can be shared
              with users of the app.
            </p>
            <div className='flex items-start gap-8 justify-normal'>
              <div className='text-left'>
                <p className='text-5xl font-medium text-blue-500 w-max'>150+</p>
                <p className='text-gray-500'>Happy Dogs</p>
              </div>
              <div className='text-left'>
                <p className='text-5xl font-medium text-blue-500'>15</p>
                <p className='text-gray-500'>Trusted by Experts</p>
              </div>
            </div>
          </div>
        </div>

        <ol className='pl-8 space-y-6 list-decimal list-inside'>
          <li>
            <strong>Understand the Responsibilities of Breeding</strong>
            <p>
              Breeding dogs requires significant time, effort, and financial
              investment. Be prepared to provide the necessary care, medical
              attention, and a suitable environment for both the parent dogs and
              their puppies.
            </p>
          </li>

          <li>
            <strong>Ensure Both Dogs Are Healthy and Fit for Breeding</strong>
            <ul className='px-8 mt-2 ml-6 space-y-2 list-disc'>
              <li>
                <strong>Health Check:</strong> Both male and female dogs should
                undergo a full veterinary check-up, including vaccinations,
                deworming, and screenings for any genetic disorders.
              </li>
              <li>
                <strong>Age Consideration:</strong> Female dogs should be at
                least 2 years old and have had at least one heat cycle before
                breeding. Male dogs should also be mature enough (around 1-2
                years) to ensure successful mating.
              </li>
              <li>
                <strong>Genetic Testing:</strong> Conduct genetic testing for
                hereditary conditions common to the breed. Avoid breeding dogs
                that carry genes for serious genetic disorders.
              </li>
            </ul>
          </li>

          <li>
            <strong>Choose the Right Mate</strong>
            <ul className='px-8 mt-2 ml-6 space-y-2 list-disc'>
              <li>
                <strong>Complementary Traits:</strong> Choose a mate with
                complementary traits to improve the breed standard. Consider
                temperament, physical attributes, and health history.
              </li>
              <li>
                <strong>Avoid Inbreeding:</strong> Breeding closely related dogs
                can increase the risk of genetic disorders. Ensure that both
                dogs are not closely related to maintain genetic diversity.
              </li>
            </ul>
          </li>

          <li>
            <strong>Monitor the Female’s Heat Cycle</strong>
            <ul className='px-8 mt-2 ml-6 space-y-2 list-disc'>
              <li>
                <strong>Recognize Signs of Heat:</strong> Female dogs go into
                heat approximately every 6 months. The cycle lasts about 3
                weeks, but the best time for mating usually occurs between days
                10-14 when the female is most fertile.
              </li>
              <li>
                <strong>Behavioral Changes:</strong> Signs include swelling of
                the vulva, increased urination, and changes in behavior. Keep a
                close watch on these changes to time the mating correctly.
              </li>
            </ul>
          </li>

          <li>
            <strong>Prepare for Mating</strong>
            <ul className='px-8 mt-2 ml-6 space-y-2 list-disc'>
              <li>
                <strong>Calm Environment:</strong> Create a calm and stress-free
                environment for the mating process. Dogs should be comfortable
                with each other and have time to interact without pressure.
              </li>
              <li>
                <strong>Supervision:</strong> Always supervise the mating
                process to ensure it proceeds smoothly. Be ready to assist if
                needed, but avoid interference unless necessary.
              </li>
            </ul>
          </li>

          <li>
            <strong>Post-Mating Care</strong>
            <ul className='px-8 mt-2 ml-6 space-y-2 list-disc'>
              <li>
                <strong>Monitor the Female:</strong> After successful mating,
                monitor the female for signs of pregnancy, such as increased
                appetite, weight gain, and changes in behavior.
              </li>
              <li>
                <strong>Vet Check-Up:</strong> Schedule a veterinary check-up
                3-4 weeks after mating to confirm pregnancy through ultrasound
                or palpation.
              </li>
            </ul>
          </li>

          <li>
            <strong>Prepare for Whelping</strong>
            <ul className='px-8 mt-2 ml-6 space-y-2 list-disc'>
              <li>
                <strong>Whelping Box:</strong> Set up a quiet, clean, and safe
                whelping area well in advance of the expected delivery date.
              </li>
              <li>
                <strong>Supplies:</strong> Ensure you have all necessary
                supplies, including clean towels, heating pads, and access to
                emergency veterinary care.
              </li>
            </ul>
          </li>

          <li>
            <strong>Provide Proper Nutrition and Care</strong>
            <ul className='px-8 mt-2 ml-6 space-y-2 list-disc'>
              <li>
                <strong>High-Quality Diet:</strong> Feed the pregnant female a
                high-quality diet designed for pregnant or lactating dogs to
                support her nutritional needs.
              </li>
              <li>
                <strong>Exercise:</strong> Moderate exercise is essential to
                keep her in good physical condition but avoid strenuous
                activities.
              </li>
            </ul>
          </li>

          <li>
            <strong>Know When to Seek Veterinary Help</strong>
            <p className='px-8 mt-2 ml-6 space-y-2 '>
              During pregnancy and delivery, watch for signs of distress such as
              excessive panting, prolonged labor, or abnormal discharge, and
              seek veterinary assistance immediately.
            </p>
          </li>

          <li>
            <strong>Plan for the Puppies’ Future</strong>
            <p className='px-8 mt-2 ml-6 space-y-2 '>
              If you are planning to rehome the puppies, screen potential
              adopters carefully to ensure they are suitable and responsible pet
              owners.
            </p>
          </li>
        </ol>

        <div className='mt-12'>
          <h2 className='text-xl font-medium lg:text-5xl '>
            Additional Resources
          </h2>
          <ul className='px-8 mt-2 ml-6 space-y-2 list-disc'>
            <li>
              <strong>Consult Your Veterinarian:</strong> Always consult with a
              veterinarian for professional advice tailored to your specific
              dogs and breeding goals.
            </li>
            <li>
              <strong>Educational Materials:</strong> Provide links to reputable
              resources, breed clubs, and educational websites for detailed
              breeding guidance.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default BreedingTips
