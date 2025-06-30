import Link from 'next/link'; // これをファイルの一番上に追加

export default function Home() {
  return (
    <div>
      <h1>
        Read <Link href="/posts/first-post">this page!</Link>
      </h1>
    </div>
  );
}