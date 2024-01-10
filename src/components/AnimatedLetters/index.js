import './index.scss'

export default function AnimatedLetters({ letterClass, str, idx }) {
  const strArr = [...str]
  console.log(str, strArr)

  return (
    <span>
      {strArr.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  )
}
