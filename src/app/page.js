import Link from "next/link"

export default function Home() {
  return (
    <main>
      <Link href="/"> Home</Link>
      <Link href="/cv"> cv</Link>
      <Link href="/contact"> contact</Link>
      <Link href="/jeu"> jeu</Link>
    </main>
  )
}
