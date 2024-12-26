'use client'

const TEXT_COLORS = {
  WHITE: 'white',
  RED: '#f22952'
} as const

type ColorButtonProps = {
  setTextColor: (color: string) => void
}

const ColorButton = ({ setTextColor }: ColorButtonProps) => {
  return (
    <div className="mt-8 flex gap-3">
      <button
        className="w-7 h-7 rounded-full border-2 border-white"
        style={{ backgroundColor: TEXT_COLORS.WHITE }}
        onClick={() => setTextColor(TEXT_COLORS.WHITE)}
      />
      <button
        className="w-7 h-7 rounded-full border-2 border-white"
        style={{ backgroundColor: TEXT_COLORS.RED }}
        onClick={() => setTextColor(TEXT_COLORS.RED)}
      />
    </div>
  )
}

export default ColorButton