export default function GithubCard({ user }) {
  if (!user || !user.login) {
    return <h2>No Profile Found</h2>;
  }

  return (
    <div
      style={{
        width: "400px",
        border: "2px solid black",
        padding: "20px",
        margin: "20px auto",
        borderRadius: "10px",
      }}
    >
      <img
        src={user.avatar_url}
        alt={user.login}
        width="150"
        style={{
          borderRadius: "50%",
        }}
      />

      <h2>{user.name}</h2>
      <p>@{user.login}</p>

      <p>{user.location}</p>

      <p>Followers : {user.followers}</p>
      <p>Following : {user.following}</p>
      <p>Repositories : {user.public_repos}</p>
      <p>Gists : {user.public_gists}</p>

      <a
        href={user.html_url}
        target="_blank"
        rel="noreferrer"
      >
        GitHub Profile
      </a>

      <br />
      <br />

      {user.blog && (
        <>
          <a
            href={user.blog}
            target="_blank"
            rel="noreferrer"
          >
            Blog
          </a>
          <br />
        </>
      )}

      {user.twitter_username && (
        <a
          href={`https://twitter.com/${user.twitter_username}`}
          target="_blank"
          rel="noreferrer"
        >
          Twitter
        </a>
      )}
    </div>
  );
}