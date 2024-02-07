declare namespace API {
  type LoginRegisterDTO = {
    email?: string;
    nickName?: string;
    password?: string;
    phone?: string;
  };

  type LoginRequestDTO = {
    account?: string;
    loginType?: string;
    password?: string;
  };

  type LoginResponseDTO = {
    token?: string;
    userId?: string;
  };

  type LoginStateDTO = {
    account?: string;
    avatar?: string;
    description?: string;
    email?: string;
    location?: string;
    nickName?: string;
    password?: string;
    phone?: string;
    userId?: string;
  };

  type ResponseLoginResponseDTO = {
    code?: string;
    data?: LoginResponseDTO;
    info?: string;
  };

  type ResponseLoginStateDTO = {
    code?: string;
    data?: LoginStateDTO;
    info?: string;
  };

  type Responsestring = {
    code?: string;
    data?: string;
    info?: string;
  };

  type UserUpdateDTO = {
    account?: string;
    avatar?: string;
    description?: string;
    email?: string;
    location?: string;
    nickName?: string;
    password?: string;
    phone?: string;
    userId?: string;
  };
}
