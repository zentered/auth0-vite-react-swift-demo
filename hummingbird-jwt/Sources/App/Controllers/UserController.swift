import Hummingbird
import HummingbirdAuth

struct User: Encodable {
  var name: String
}

let data: [User] = [
  User(name: "Jane"),
  User(name: "John"),
]

struct UserController {
  func listUsers(request: HBRequest) throws -> [User] {
    let jwtPayload = request.authGet(JWTPayloadData.self)
    let userId = jwtPayload?.subject
    print(userId!)
    return data
  }
}
