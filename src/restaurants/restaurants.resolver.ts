import { Resolver, Query } from '@nestjs/graphql';
import { Restaurant } from './entities/restaurant.entity';

@Resolver()
export class RestaurantsResolver {
  @Query(() => Restaurant)
  myRestaurant() {
    return true;
  }
}
