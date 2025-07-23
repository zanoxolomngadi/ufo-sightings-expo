
import { Text } from 'react-native'


type HeaderTextProps = {
  title: string;
  padding: string;
};

export default function HeaderTextComponent(props: HeaderTextProps) {
  

  return (
    <Text className={`text-white text-center text-2xl font-bold ${props.padding}`}>
      {props.title}
    </Text>
  )
}