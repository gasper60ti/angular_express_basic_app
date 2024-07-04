import User from '@/models/user'
import { NextFunction, Response, Request } from 'express'

//getUsers
export async function getUsers(req: Request, res: Response) {
  res.status(200).json({
    data: await User.find(),
  })
}

//getUserById
export async function getUserById(req: Request<{ id: string }>, res: Response) {
  res.status(200).json({
    data: await User.findById(req.params.id),
  })
}

//storeUser user with all attributes
export async function storeUser(
    req: Request<never, never, {
    username: String,
    password: String,
    country: String,
    email: String,
    sexe: String,
    terms: Boolean,
      
  }>,
  res: Response
) {
  res.status(201).json({
    data: await User.create(req.body),
  })
}


// update user with all attributes
export async function updateUser(
  req: Request<{ id: string }, never, {
    username: String,
    password: String,
    country: String,
    email: String,
    sexe: String,
    terms: Boolean,
  }>,
  res: Response
) {
  res.status(201).json({
    data: await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    }),
  })
}


//deleteUser
export async function deleteUser(req: Request<{ id: string }>, res: Response) {
  res.status(200).json({
    data: await User.findByIdAndDelete(req.params.id),
  })
}


//jOINTURE ENTRE USER ET PASSPORT AVEC $lookup
export async function joinUserPassport(_: Request, res: Response) {
  res.status(200).json({
    data: await User.aggregate([
      {
        $lookup: {
          from: 'passports',
          localField: '_id',
          foreignField: 'user_id',
          as: 'passports',
        },
      },
      {$unwind: '$passports'},
    ]),
  })
}

export async function listUserBalanceGreater(req: Request<{ value: string }>, res: Response) {
  res.status(200).json({
    data: await User.aggregate([
      {
        $lookup: {
          from: 'accounts',
          localField: '_id',
          foreignField: 'user_id',
          as: 'account',
        },
      },
      {$unwind: '$account'},
      {
        $match: {
          'account.balance': {
            $gt: parseFloat(req.params.value as string),
          },
        },
      },
    ]),
  })
} 


export async function detailsUserBalanceGreater(req: Request<{ value: string }>, res: Response) {
  res.status(200).json({
    data: await User.aggregate([
      {
        $lookup: {
          from: 'accounts',
          localField: '_id',
          foreignField: 'user_id',
          as: 'account',
        },
      },
      { $unwind: '$account' },
      {
        $lookup: {
          from: 'passports',
          localField: '_id',
          foreignField: 'user_id',
          as: 'passport',
        },
      },
      { $unwind: '$passport' },
      {
        $match: {
          'account.balance': {
            $gt: parseFloat(req.params.value as string),
          },
        },
      },
      {
        $project: {
          username: 1,
          'account.accountNumber': 1,
          'passport.number': 1,
        },
      },
    ]),
  })
}