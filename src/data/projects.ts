export type Project = {
  id: string
  name: string
  description: string
  image: string
  url?: string
  tags?: string[]
}

export const projects: Project[] = [
  {
    id: 'kigo-training',
    name: 'キゴトレ',
    description:
      '季語を知れば、俳句はもっと面白い。\n引いた季語カードで俳句を作る、作句力向上アプリ。',
    image: '/projects/kigo-training.png',
    url: 'https://kigo-training.vercel.app/',
    tags: ['俳句'],
  },
  {
    id: 'yonka-timer',
    name: '４科タイマー',
    description:
      '中学受験生向けのシンプルな集中タイマー。\n国語・算数・理科・社会の４科ごとの勉強時間計測も可能。自走する中学受験のサポートに。',
    image: '/projects/yonka-timer.jpg',
    url: 'https://yonka-timer.vercel.app/',
    tags: ['教育'],
  },
  {
    id: 'planter',
    name: 'PLANter',
    description:
      '「やりたい」をタネにして育てる、新感覚ウィッシュリスト。\n優先順位をつけて、30日以内に夢を叶えよう！',
    image: '/projects/planter.png',
    url: 'https://planter-v0.vercel.app/',
    tags: ['ウィッシュリスト'],
  },
]
