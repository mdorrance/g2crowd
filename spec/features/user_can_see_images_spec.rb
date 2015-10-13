require "rails_helper"

RSpec.describe "Index page", type: :feature do
  context "A user can see images" do

    it "renders the index page" do
      visit root_path

      within("header") do
        expect(page).to have_css "img.main"
        expect(page).to have_css "img.left"
        expect(page).to have_css "img.right"
      end

      within("nav") do
        expect(page).to have_css "button"
      end

      within("#callouts") do
        expect(page).to have_css "img"
      end
    end
  end
end
