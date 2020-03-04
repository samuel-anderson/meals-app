import { createStackNavigator, } from 'react-navigation-stack'
import { createAppContainer} from 'react-navigation'
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoriesMealsScreen from '../screens/CategoryMealsScreen';
import MealsDetailScreen from '../screens/MealDetailScreen';

//Reference: https://reactnavigation.org/docs/4.x/app-containers/

const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen
    },
    CategoryMeals: {
        screen: CategoriesMealsScreen
    },
    MealDetail: {
        screen: MealsDetailScreen
    }

});

export default createAppContainer(MealsNavigator);