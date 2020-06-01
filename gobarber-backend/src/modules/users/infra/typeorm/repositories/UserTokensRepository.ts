import IUserTokensRepository from '@modules/users/repositories/IUserTokensRepository';
import UserToken from '../entities/UserToken';

export default class UserTokensRepository implements IUserTokensRepository {
  public async generate(user_id: string): Promise<UserToken> {
    return new UserToken();
  }
}