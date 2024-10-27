import React from 'react'

const DeleteYourAccount = () => {
  return (
    <div className='max-w-4xl mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-4'>Delete Your Account</h1>
      <p>
        We value your privacy and understand that you may wish to delete your
        account. If you no longer want to be a part of our community, you have
        two options to delete your account:
      </p>

      <h2 className='text-2xl font-semibold mt-6 mb-2'>
        1. Delete from the App:
      </h2>
      <p>
        You can easily delete your account directly through the app. Simply go
        to your profile settings, select the "Delete Account" option, and follow
        the on-screen instructions. Once the deletion process is complete, all
        your data, including your profile and any associated information, will
        be permanently removed from our system. Please note that this action is
        irreversible.
      </p>

      <h2 className='text-2xl font-semibold mt-6 mb-2'>
        2. Request via Email:
      </h2>
      <p>
        Alternatively, if you prefer to delete your account by email, please
        send a request to{' '}
        <a
          href='mailto:info@sniffitapp.in'
          className='text-blue-600 hover:underline'
        >
          info@sniffitapp.in
        </a>
        . In your email, kindly include your registered email address or
        username, so we can process your request efficiently. We aim to respond
        and handle account deletion requests within 48 hours.
      </p>

      <p className='mt-4'>
        After your account is deleted, you will no longer have access to any of
        your data or features associated with your account. If you decide to
        join our platform again, you will need to create a new account.
      </p>
    </div>
  )
}

export default DeleteYourAccount
