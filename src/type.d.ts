interface TechIcon {
  icon: React.ElementType
  color: string
}

interface Project {
  id: number
  cat: string
  title: string
  bg: string
  col: string
  techIcons: TechIcon[]
}

interface Service {
  num: string
  name: string
  desc: string
}

interface ServiceItemProps {
  item: Service
}

interface Social {
  icon: React.ElementType
  href: string
  label: string
}

interface InputFormField {
  id: string
  label: string
  placeholder: string
  type?: string
  colSpan?: boolean
}