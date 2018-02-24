import {Navigation} from 'react-native-navigation'
import Icon from 'react-native-vector-icons/Ionicons';
const startMainTabs = () => {
    Promise.all([
Icon.getImageSource("md-map",30),
Icon.getImageSource("ios-share-alt",30)

    ]).then(sources=>{

Navigation.startTabBasedApp({
  tabs: [
    {
      screen: "awesome-places.FindPlace",
      label: "Find Place",
      title: "get Places",
      icon: sources[0]
    },
    {
      screen: "awesome-places.SharePlace",
      label: "SharePlace Place",
      title: "SharePlace Places",
      icon: sources[1]
    }
  ]
});
})
};

export default startMainTabs;