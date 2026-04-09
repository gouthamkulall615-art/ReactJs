import React, { useEffect, useState } from "react";

const App = () => {
  const [userName, setUserName] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchGitHubUserData() {
    setLoading(true);
    try {
      const res = await fetch(`https://api.github.com/users/${userName}`);
      const data = await res.json();
      if (data && data.login) {
        setUserData(data);
      } else {
        setUserData(null);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchGitHubUserData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto flex gap-4 mb-10">
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Enter username"
          className="flex-grow border-2 border-gray-400 p-3 rounded bg-white text-lg"
        />
        <button
          onClick={fetchGitHubUserData}
          className="bg-blue-600 text-white px-8 py-3 rounded font-bold text-lg active:bg-blue-800 active:scale-95 cursor-pointer"
        >
          Search
        </button>
      </div>

      <div className="max-w-2xl mx-auto border-4 border-black bg-white p-10">
        {loading ? (
          <h1 className="text-2xl font-bold text-gray-600 text-center">
            Loading data...
          </h1>
        ) : userData ? (
          <div className="flex flex-col items-center gap-6">
            <img
              src={userData.avatar_url}
              alt="Profile"
              className="w-40 h-40 border-4 border-black"
            />

            <div className="text-center">
              <h1 className="text-4xl font-black text-black uppercase">
                {userData.name || userData.login}
              </h1>
              <a
                href={userData.html_url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 text-xl font-bold underline"
              >
                @{userData.login}
              </a>
              <p className="text-gray-500 mt-2 text-lg">
                Joined: {new Date(userData.created_at).toDateString()}
              </p>
            </div>

            <div className="w-full border-t-2 border-black mt-4 pt-6 flex flex-col gap-4">
              <div className="flex justify-between text-2xl">
                <span className="font-bold text-gray-700">Public Repos:</span>
                <span className="font-black text-blue-700">
                  {userData.public_repos}
                </span>
              </div>
              <div className="flex justify-between text-2xl">
                <span className="font-bold text-gray-700">Followers:</span>
                <span className="font-black text-blue-700">
                  {userData.followers}
                </span>
              </div>
              <div className="flex justify-between text-2xl">
                <span className="font-bold text-gray-700">Following:</span>
                <span className="font-black text-blue-700">
                  {userData.following}
                </span>
              </div>
            </div>

            {userData.bio && (
              <div className="w-full bg-gray-200 p-4 border-2 border-gray-400 mt-4">
                <p className="text-gray-800 italic">{userData.bio}</p>
              </div>
            )}
          </div>
        ) : (
          <h1 className="text-2xl font-bold text-red-500 text-center">
            User not found!
          </h1>
        )}
      </div>
    </div>
  );
};

export default App;
