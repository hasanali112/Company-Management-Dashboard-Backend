export type TUserStatus = 'active' | 'pending' | 'blocked'

export type TUserRole = 'admin' | 'manager' | 'employee'

export type TUser = {
  role: TUserRole
  password: string
  isPasswordChanged: boolean
  status: TUserStatus
  isDeleted: boolean
}
