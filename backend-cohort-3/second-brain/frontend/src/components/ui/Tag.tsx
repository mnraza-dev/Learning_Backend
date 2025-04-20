interface TagProps {
  title: string[]
}

const Tag = ({ title }: TagProps) => {
  return (
    <div className="flex flex-wrap gap-2 my-2">
      {title.map((item, index) => (
        <div
          key={index}
          className='flex items-center justify-center gap-2 rounded-2xl px-4 py-1 bg-[#d7c7eb]'
        >
          <span className='text-xs text-[#492674]'>#{item}</span>
        </div>
      ))}
    </div>
  )
}

export default Tag
