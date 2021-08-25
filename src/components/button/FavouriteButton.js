import React, { useState } from 'react'
import { Button } from '../base'
import { useDispatch } from 'react-redux'

import { Favourite, FavouriteSolid } from '../icons'
import theme from '../../constants/theme'
import {
  addFavourite,
  removeFavourite,
} from '../../redux/actions/favouriteActions'

const FavouriteButton = ({ data }) => {
  const dispatch = useDispatch()
  const [favourite, setFavourite] = useState(data.favourite)

  return (
    <Button
      onPress={() => {
        if (favourite) {
          dispatch(removeFavourite(data.id))
        } else {
          dispatch(addFavourite(data))
        }
        setFavourite(!data.favourite)
        data.favourite = !data.favourite
      }}
    >
      {data.favourite ? (
        <FavouriteSolid
          color={
            data.favourite ? theme.colors.flyAgaric : theme.colors.airCraftWhite
          }
        />
      ) : (
        <Favourite color={theme.colors.gainsBoro} />
      )}
    </Button>
  )
}

export default FavouriteButton
