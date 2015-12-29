package controllers

import play.api._
import play.api.mvc._

class Chat extends Controller {

  def index = Action {
    Ok(views.html.chat.index("Your new application is ready."))
  }

}
