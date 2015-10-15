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

      within("table") do
        expect(page).to have_css "tr"
        expect(page).to have_css "th"
        expect(page).to have_css "td"
        expect(page).to have_content "My Table"
        expect(page).to have_content "Row 1 Column 1"
        expect(page).to have_content "Row 2 Column 2"
        expect(page).to have_content "Row 3 Column 3"
      end
      within("#images") do
        expect(page).to have_css ".grid"
      end
    end
  end
end
