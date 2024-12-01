import React from 'react'

const AdoptionTips = () => {
  return (
    <div className='px-6 py-10 text-gray-800 p lg:py-16'>
      <div className='max-w-4xl mx-auto'>
        <h1 className='mb-10 text-3xl font-medium text-left lg:mb-20 lg:text-5xl'>
          Adoption Tips for Pet <br /> Parents on Sniffit
        </h1>

        <ol className='pl-8 space-y-6 list-decimal list-inside'>
          <li>
            <strong>Understand the Commitment</strong>
            <ul className='px-8 mt-2 ml-6 space-y-2 list-disc'>
              <li>
                <strong>Long-Term Responsibility:</strong> Adopting a pet is a
                long-term commitment that can last for 10-15 years or more.
                Ensure you are prepared for the financial, emotional, and time
                investment required for the pet’s entire lifetime.
              </li>
              <li>
                <strong>Lifestyle Fit:</strong> Consider your lifestyle, living
                situation, and activity level to determine the type of pet that
                best suits you. Ensure your home environment is suitable for the
                pet's needs.
              </li>
            </ul>
          </li>

          <li>
            <strong>Research Breeds and Temperaments</strong>
            <ul className='px-8 mt-2 ml-6 space-y-2 list-disc'>
              <li>
                <strong>Breed Characteristics:</strong> Research different
                breeds to understand their temperament, energy levels, grooming
                needs, and potential health issues.
              </li>
              <li>
                <strong>Temperament Testing:</strong> If possible, spend time
                with the pet before adopting it to assess its behavior and
                temperament.
              </li>
            </ul>
          </li>

          <li>
            <strong>Consider Age and Energy Level</strong>
            <ul className='px-8 mt-2 ml-6 space-y-2 list-disc'>
              <li>
                Puppies require intensive training, socialization, and more
                time, while adult dogs may already be house-trained and less
                demanding.
              </li>
              <li>
                Choose an age that fits your availability and experience level.
              </li>
            </ul>
          </li>

          <li>
            <strong>Prepare Your Home</strong>
            <ul className='px-8 mt-2 ml-6 space-y-2 list-disc'>
              <li>
                <strong>Pet-Proofing:</strong> Before bringing a pet home,
                pet-proof your house by removing hazards such as toxic plants,
                electrical cords, and small objects that could be swallowed.
              </li>
              <li>
                <strong>Supplies:</strong> Gather essential supplies like a bed,
                food and water bowls, leash, collar, toys, and grooming tools.
              </li>
            </ul>
          </li>

          <li>
            <strong>Establish a Routine</strong>
            <ul className='px-8 mt-2 ml-6 space-y-2 list-disc'>
              <li>
                <strong>Consistency:</strong> Establish a routine for feeding,
                bathroom breaks, exercise, and training.
              </li>
              <li>
                <strong>Training:</strong> Basic training such as housebreaking
                and obedience commands is essential.
              </li>
            </ul>
          </li>

          <li>
            <strong>Budget for Pet Care</strong>
            <ul className='px-8 mt-2 ml-6 space-y-2 list-disc'>
              <li>
                <strong>Initial Costs:</strong> Be prepared for initial
                expenses, including adoption fees, vaccinations,
                spaying/neutering, microchipping, and a vet check-up.
              </li>
              <li>
                <strong>Ongoing Costs:</strong> Factor in ongoing costs such as
                food, grooming, regular veterinary care, pet insurance, and
                emergency medical expenses.
              </li>
            </ul>
          </li>

          <li>
            <strong>Visit the Veterinarian</strong>
            <ul className='px-8 mt-2 ml-6 space-y-2 list-disc'>
              <li>
                <strong>Health Check-Up:</strong> Schedule a vet visit soon
                after adoption for a thorough health check-up.
              </li>
              <li>
                <strong>Microchipping:</strong> Ensure the pet is microchipped
                and registered with your contact information.
              </li>
            </ul>
          </li>

          <li>
            <strong>Be Patient and Allow Time for Adjustment</strong>
            <ul className='px-8 mt-2 ml-6 space-y-2 list-disc'>
              <li>
                Understand that adopted pets may need time to adjust to their
                new home. Be patient and allow them to explore and acclimate at
                their own pace.
              </li>
            </ul>
          </li>

          <li>
            <strong>Socialization</strong>
            <ul className='px-8 mt-2 ml-6 space-y-2 list-disc'>
              <li>
                Introduce your new pet to other pets and family members
                gradually to avoid overwhelming them.
              </li>
            </ul>
          </li>

          <li>
            <strong>Plan for the Future</strong>
            <ul className='px-8 mt-2 ml-6 space-y-2 list-disc'>
              <li>
                <strong>Backup Plan:</strong> Consider who will care for your
                pet in case of travel, emergencies, or changes in living
                situations.
              </li>
              <li>
                <strong>Pet Care Documents:</strong> Keep important documents,
                such as vaccination records, organized and accessible.
              </li>
            </ul>
          </li>
        </ol>

        <div className='mt-12 space-y-6'>
          <h2 className='text-xl font-medium lg:text-5xl '>
            Promote Responsible Adoption
          </h2>
          <ul className='px-8 mt-2 ml-6 space-y-2 list-disc'>
            <li>
              Emphasize the importance of providing a loving, stable home.
            </li>
            <li>
              Encourage users to adopt pets with special needs or older pets.
            </li>
          </ul>

          <h2 className='text-xl font-medium lg:text-5xl '>
            Additional Resources
          </h2>
          <ul className='px-8 mt-2 ml-6 space-y-2 list-disc'>
            <li>
              Provide access to educational materials, services, and training
              resources.
            </li>
            <li>
              Encourage users to connect with local adoption agencies and
              community support.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AdoptionTips
