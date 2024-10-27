import React from 'react'
import { Link } from 'react-router-dom'
const Privacy = () => {
  return (
    <div className='max-w-4xl mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-4'>Sniffit Privacy Policy</h1>
      <p>
        Sniffit is committed to protecting your privacy and ensuring
        transparency in how we handle your personal information. This Privacy
        Policy outlines the types of information we collect, how we use it,
        share it, and protect it when you use the Sniffit application. Please
        review this Privacy Policy carefully. By using Sniffit, you acknowledge
        and agree to the practices described here. If you disagree, please
        refrain from using the App.
      </p>

      <h2 className='text-2xl font-semibold mt-6 mb-2'>
        1. Information We Collect
      </h2>
      <p>
        We collect the following types of information to provide and improve our
        services:
      </p>

      <h3 className='text-xl font-semibold mt-4 mb-2'>
        1.1 Information You Provide Directly
      </h3>
      <ul className='list-disc ml-5'>
        <li>
          <strong>Account Information:</strong> When you create an account, we
          collect identifiable personal data such as your name, email address,
          phone number, and pet details. This information is required to create
          your account and use our services.
        </li>
        <li>
          <strong>Profile Information:</strong> You can provide additional
          details such as pet name, breed, health conditions, gender, photos,
          and location (either approximate or specific) to enhance the quality
          of the matches in the App.
        </li>
      </ul>

      <h3 className='text-xl font-semibold mt-4 mb-2'>
        1.2 Information Collected Automatically
      </h3>
      <ul className='list-disc ml-5'>
        <li>
          <strong>Usage Data:</strong> When you interact with Sniffit, we
          automatically collect data about your usage patterns, such as the
          features you access, pages viewed, and interactions within the app.
          This data may include timestamps, clickstream information, and other
          behavioral analytics to help us improve the user experience.
        </li>
        <li>
          <strong>Device Information:</strong> We collect details about the
          device you use to access Sniffit, including IP address, browser type,
          device model, operating system version, app version, and unique device
          identifiers (such as Android ID or Apple’s Identifier for
          Advertisers).
        </li>
        <li>
          <strong>Location Data:</strong> With your consent, we collect precise
          location data to provide location-based services, such as showing
          nearby pet matches. You can control location-sharing preferences
          through your device’s settings.
        </li>
      </ul>

      <h3 className='text-xl font-semibold mt-4 mb-2'>
        1.3 Information from Third Parties
      </h3>
      <ul className='list-disc ml-5'>
        <li>
          <strong>Social Media Login:</strong> If you link or log in to your
          Sniffit account through a third-party social media platform (e.g.,
          Facebook, Google), we collect information from your profile on those
          platforms, such as your username, profile picture, and friends list,
          depending on your privacy settings on those platforms.
        </li>
        <li>
          <strong>Third-Party Services:</strong> We may receive information from
          external partners or advertisers for analytics purposes, including
          data on interactions with ads or promotions that appear on our
          platform.
        </li>
      </ul>

      <h2 className='text-2xl font-semibold mt-6 mb-2'>
        2. How We Use Your Information
      </h2>
      <p>We use your personal information to:</p>
      <ul className='list-disc ml-5'>
        <li>
          <strong>Provide Services:</strong> To create and manage your account,
          match you with other pet owners based on your preferences and pet
          details, and allow you to communicate with other users.
        </li>
        <li>
          <strong>Improve Our Services:</strong> To understand how users
          interact with Sniffit and optimize features, including
          troubleshooting, data analysis, and research aimed at improving
          usability.
        </li>
        <li>
          <strong>Personalize Content and Experiences:</strong> We tailor
          content and features based on your preferences, pet information, and
          location to offer more relevant suggestions for matches or services.
        </li>
        <li>
          <strong>Communicate with You:</strong> To send necessary
          service-related communications, such as confirmation emails, updates
          on changes to our policies, responses to customer inquiries, or
          promotional messages if you have opted in to receive such content.
        </li>
        <li>
          <strong>Enforce Legal Obligations and Policies:</strong> To comply
          with applicable laws, enforce our Terms of Use, and ensure the safety
          and integrity of the Sniffit community.
        </li>
        <li>
          <strong>Marketing and Promotions:</strong> Subject to your consent, we
          may use your information to send you promotional offers, surveys, and
          newsletters about new services and products. You can opt out of such
          communications at any time.
        </li>
      </ul>

      <h2 className='text-2xl font-semibold mt-6 mb-2'>
        3. How We Share Your Information
      </h2>
      <p>We only share your information in the following circumstances:</p>
      <h3 className='text-xl font-semibold mt-4 mb-2'>3.1 With Other Users</h3>
      <p>
        Certain parts of your profile (e.g., your name, pet information, photos,
        and location) are visible to other Sniffit users. This allows other
        users to find and connect with you for pet matches, adoption, or rescue.
        However, sensitive information such as payment details is never shared.
      </p>

      <h3 className='text-xl font-semibold mt-4 mb-2'>
        3.2 With Third-Party Service Providers
      </h3>
      <p>
        We may share your information with third-party vendors and service
        providers to assist in delivering our services. These partners may
        handle tasks such as payment processing, email services, app analytics,
        cloud storage, or customer support. We ensure these third parties are
        contractually bound to handle your data securely and only for the
        purposes specified.
      </p>

      <h3 className='text-xl font-semibold mt-4 mb-2'>
        3.3 Legal Requirements
      </h3>
      <p>
        We may disclose your information if required by law, legal process, or
        government request. We may also share your information if we believe
        such disclosure is necessary to protect our rights or comply with a
        legal obligation, investigate fraud, enforce our policies, or protect
        users’ safety.
      </p>

      <h3 className='text-xl font-semibold mt-4 mb-2'>
        3.4 Business Transfers
      </h3>
      <p>
        In the event of a merger, acquisition, reorganization, or sale of all or
        part of Sniffit’s assets, your data may be transferred as part of that
        transaction. You will be notified if this happens, and we will ensure
        that the acquiring entity continues to handle your data per this Privacy
        Policy.
      </p>

      <h2 className='text-2xl font-semibold mt-6 mb-2'>4. Data Retention</h2>
      <p>
        We retain personal data for as long as necessary to provide services to
        you or as required for compliance with legal obligations. The retention
        period may vary depending on the type of data and its purpose. For
        example, we may retain basic account data while your account is active,
        and for a period after account deletion, to comply with legal or
        regulatory requirements.
      </p>

      <p>
        When you delete your account, we will remove or anonymize your personal
        information, except for limited data that must be retained for
        legitimate legal purposes, such as payment records or compliance with
        applicable laws.
      </p>

      <h2 className='text-2xl font-semibold mt-6 mb-2'>
        5. Your Rights and Choices
      </h2>
      <p>
        You may have the following rights under applicable privacy laws, such as
        GDPR, CCPA, or other relevant regulations, depending on your location:
      </p>
      <ul className='list-disc ml-5'>
        <li>
          <strong>Access:</strong> You can request a copy of the personal data
          we hold about you.
        </li>
        <li>
          <strong>Rectification:</strong> You can request correction or updates
          to any incorrect or outdated information.
        </li>
        <li>
          <strong>Erasure:</strong> You may request deletion of your personal
          information, though this may be subject to legal or regulatory
          restrictions.
        </li>
        <li>
          <strong>Portability:</strong> You may request that we transfer your
          data to another service provider in a structured, machine-readable
          format, where technically feasible.
        </li>
        <li>
          <strong>Opt-Out:</strong> You can opt out of marketing communications
          by adjusting your settings or clicking the “unsubscribe” link in
          promotional emails.
        </li>
      </ul>
      <p>To exercise any of these rights, contact us at info@sniffitapp.in.</p>

      <h2 className='text-2xl font-semibold mt-6 mb-2'>
        6. Security of Your Information
      </h2>
      <p>
        We implement technical and organizational measures to protect your data
        from unauthorized access, disclosure, alteration, or destruction. This
        includes encryption, secure servers, and restricted access to personal
        data. While we strive to use commercially acceptable security measures
        to protect your information, please be aware that no method of
        transmission over the Internet or electronic storage is entirely secure.
        Although we work to protect your data, we cannot guarantee its absolute
        security.
      </p>

      <h2 className='text-2xl font-semibold mt-6 mb-2'>
        7. Changes to This Privacy Policy
      </h2>
      <p>
        We may update this Privacy Policy from time to time to reflect changes
        in our practices or applicable laws. If we make significant changes, we
        will notify you by posting a notice on our app or by other means. Your
        continued use of Sniffit after any changes to this Privacy Policy will
        constitute your acceptance of the revised policy.
      </p>

      <h2 className='text-2xl font-semibold mt-6 mb-2'>8. Contact Us</h2>
      <p>
        If you have any questions or concerns about this Privacy Policy or our
        data practices, please contact us:
      </p>
      <ul className='list-disc ml-5'>
        <li>
          Email:{' '}
          <a
            href='mailto:info@sniffitapp.in'
            className='text-blue-600 hover:underline'
          >
            info@sniffitapp.in
          </a>
        </li>
        <li>
          Address: Sniffit Inc., 123 Pet Lane, Animal City, AC 12345, India
        </li>
      </ul>
      <h2 className='text-2xl font-semibold mt-6 mb-2'>
        9. Delete Your Account
      </h2>
      <Link
        className='hover:underline hover:text-orange-500'
        to='/delete-your-account'
      >
        Click here for more information
      </Link>
    </div>
  )
}

export default Privacy
