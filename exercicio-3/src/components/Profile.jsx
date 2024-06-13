/* eslint-disable react/prop-types */
export const Profile = ({ avatar, name, bio, phone, email, githubUrl, linkedinUrl, twitterUrl }) => {
  return (
    <div>
      <div>
        <img src={avatar} alt={`Avatar de ${name}`} />
        <h1>{name}</h1>
      </div>
      <div>
        <p>{bio}</p>
        <p>{phone}</p>
        <p>{email}</p>
      </div>
      <div
        style={{
          display: 'flex',
          gap: '16px',
          justifyContent: 'center',
        }}
      >
        <a href={githubUrl} target="_blank" >GitHub</a>
        <a href={linkedinUrl} target="_blank" >LinkedIn</a>
        <a href={twitterUrl} target="_blank" >Twitter</a>
      </div>
    </div>
  )
}
