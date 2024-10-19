import React from 'react';

export default function Settings() {
  return (
    <div className="p-6 max-w-9xl mx-auto absolute top-[169px]">
      <h2 className="text-2xl font-semibold text-center mb-6 mt-30">Settings</h2>
      <div className="bg-white p-6 rounded-lg shadow-lg">
<<<<<<< HEAD
        <h3 className="text-xl font-bold text-gray-800 mb-4 w-full mt-10">Account Settings</h3>
=======
        <h3 className="text-xl font-bold text-gray-800 mb-4 w-full ">Account Settings</h3>
>>>>>>> cd0b22c40025d60c86c0c2c7ae384697bb6ed1ff
        <p className="text-lg text-gray-600 mb-4">
          Manage your account settings and preferences here.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <h4 className="text-lg font-bold text-gray-700">Profile</h4>
            <p className="text-xl font-semibold text-blue-500">
              Update your profile information and preferences.
            </p>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <h4 className="text-lg font-bold text-gray-700">Security</h4>
            <p className="text-xl font-semibold text-red-500">
              🔒 Change your password or enable two-factor authentication.
            </p>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <h4 className="text-lg font-bold text-gray-700">Notifications</h4>
            <p className="text-xl font-semibold text-green-500">
              🔔 Adjust your notification preferences.
            </p>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <h4 className="text-lg font-bold text-gray-700">Privacy</h4>
            <p className="text-xl font-semibold text-yellow-500">
              🛡️ Manage your privacy settings and data sharing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
