/* eslint-disable @typescript-eslint/no-this-alias */
import { model, Schema } from 'mongoose'
import { TUser } from './user.interface'
import { userRole, userStatus } from './user.constant'
import bycryptjs from 'bcryptjs'
import config from '../../config'

const userSchema = new Schema<TUser>(
  {
    role: {
      type: String,
      enum: userRole,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      select: false,
    },
    isPasswordChanged: {
      type: Boolean,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: userStatus,
      required: true,
    },
  },
  {
    timestamps: true,
  },
)

userSchema.pre('save', async function (next) {
  const user = this

  user.password = await bycryptjs.hash(user.password, Number(config.salt_round))

  next()
})

userSchema.methods.toJSON = function () {
  const user = this.toObject()
  delete user.password
  return user
}

export const User = model<TUser>('User', userSchema)
